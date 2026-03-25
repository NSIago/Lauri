import { NextResponse } from 'next/server';

const CAIXA_URL = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados';

type JogoResult = {
  numeroDoConcurso: number;
  dataProximoConcurso: string;
  valorEstimadoProximoConcurso: number;
};

type UltimosResultados = {
  lotofacil: JogoResult;
  megasena: JogoResult;
  quina: JogoResult;
  duplasena: JogoResult;
  lotomania: JogoResult;
  [key: string]: JogoResult;
};

function formatPrize(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    const formatted = Number.isInteger(m)
      ? m.toString()
      : m.toFixed(1).replace('.', ',');
    return `${formatted} MILHÕES`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(0)} MIL`;
  }
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatSorteio(dataBR: string): string {
  // "25/03/2026" → "25/03"
  const parts = dataBR.split('/');
  if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
  return dataBR;
}

function buildInfo(jogo: JogoResult) {
  return {
    // próximo concurso = último sorteado + 1
    concurso: String(jogo.numeroDoConcurso + 1),
    sorteio: jogo.dataProximoConcurso ? formatSorteio(jogo.dataProximoConcurso) : '',
    prize: jogo.valorEstimadoProximoConcurso > 0
      ? formatPrize(jogo.valorEstimadoProximoConcurso)
      : '',
  };
}

export async function GET() {
  try {
    const res = await fetch(CAIXA_URL, {
      next: { revalidate: 1800 }, // revalida a cada 30 min
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data: UltimosResultados = await res.json();

    const result = {
      lotofacil: data.lotofacil ? buildInfo(data.lotofacil) : null,
      megasena:  data.megasena  ? buildInfo(data.megasena)  : null,
      quina:     data.quina     ? buildInfo(data.quina)     : null,
      duplasena: data.duplasena ? buildInfo(data.duplasena) : null,
      lotomania: data.lotomania ? buildInfo(data.lotomania) : null,
    };

    return NextResponse.json(result, {
      headers: { 'Cache-Control': 's-maxage=1800, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('[concursos] Erro ao buscar API Caixa:', err);
    return NextResponse.json(
      { error: 'Falha ao buscar dados da Caixa' },
      { status: 502 }
    );
  }
}
