import { NextResponse } from 'next/server';

const CAIXA_BASE = 'https://servicebus2.caixa.gov.br/portaldeloterias/api';

type CaixaResult = {
  numero: number;
  numeroConcursoProximo: number;
  dataProximoConcurso: string;
  valorEstimadoProximoConcurso: number;
  acumulado: boolean;
};

async function fetchJogo(tipo: string): Promise<CaixaResult | null> {
  try {
    const res = await fetch(`${CAIXA_BASE}/${tipo}`, {
      next: { revalidate: 3600 }, // cache 1h
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function formatPrize(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    // Ex: 6.5 → "6,5 MILHÕES" | 50 → "50 MILHÕES"
    const formatted = Number.isInteger(m) ? m.toString() : m.toFixed(1).replace('.', ',');
    return `${formatted} MILHÕES`;
  }
  if (value >= 1_000) {
    return `${(value / 1000).toFixed(0)} MIL`;
  }
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatSorteio(dataBR: string): string {
  // "24/02/2026" → "24/02"
  const parts = dataBR.split('/');
  if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
  return dataBR;
}

export async function GET() {
  const [lotofacil, megasena, quina, duplasena, lotomania] = await Promise.all([
    fetchJogo('lotofacil'),
    fetchJogo('megasena'),
    fetchJogo('quina'),
    fetchJogo('duplasena'),
    fetchJogo('lotomania'),
  ]);

  function nextConcurso(data: CaixaResult): string {
    // A API às vezes retorna numeroConcursoProximo = 0; fallback: ultimo + 1
    if (data.numeroConcursoProximo && data.numeroConcursoProximo > 0) {
      return String(data.numeroConcursoProximo);
    }
    return String(data.numero + 1);
  }

  function nextSorteio(data: CaixaResult): string {
    if (data.dataProximoConcurso) return formatSorteio(data.dataProximoConcurso);
    return '';
  }

  function nextPrize(data: CaixaResult): string {
    if (data.valorEstimadoProximoConcurso && data.valorEstimadoProximoConcurso > 0) {
      return formatPrize(data.valorEstimadoProximoConcurso);
    }
    return '';
  }

  const result = {
    lotofacil: lotofacil ? {
      concurso: nextConcurso(lotofacil),
      sorteio: nextSorteio(lotofacil),
      prize: nextPrize(lotofacil),
    } : null,
    megasena: megasena ? {
      concurso: nextConcurso(megasena),
      sorteio: nextSorteio(megasena),
      prize: nextPrize(megasena),
    } : null,
    quina: quina ? {
      concurso: nextConcurso(quina),
      sorteio: nextSorteio(quina),
      prize: nextPrize(quina),
    } : null,
    duplasena: duplasena ? {
      concurso: nextConcurso(duplasena),
      sorteio: nextSorteio(duplasena),
      prize: nextPrize(duplasena),
    } : null,
    lotomania: lotomania ? {
      concurso: nextConcurso(lotomania),
      sorteio: nextSorteio(lotomania),
      prize: nextPrize(lotomania),
    } : null,
  };

  return NextResponse.json(result, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
  });
}
