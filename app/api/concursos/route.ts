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

  const result = {
    lotofacil: lotofacil ? {
      concurso: String(lotofacil.numeroConcursoProximo),
      sorteio: formatSorteio(lotofacil.dataProximoConcurso),
      prize: formatPrize(lotofacil.valorEstimadoProximoConcurso),
    } : null,
    megasena: megasena ? {
      concurso: String(megasena.numeroConcursoProximo),
      sorteio: formatSorteio(megasena.dataProximoConcurso),
      prize: formatPrize(megasena.valorEstimadoProximoConcurso),
    } : null,
    quina: quina ? {
      concurso: String(quina.numeroConcursoProximo),
      sorteio: formatSorteio(quina.dataProximoConcurso),
      prize: formatPrize(quina.valorEstimadoProximoConcurso),
    } : null,
    duplasena: duplasena ? {
      concurso: String(duplasena.numeroConcursoProximo),
      sorteio: formatSorteio(duplasena.dataProximoConcurso),
      prize: formatPrize(duplasena.valorEstimadoProximoConcurso),
    } : null,
    lotomania: lotomania ? {
      concurso: String(lotomania.numeroConcursoProximo),
      sorteio: formatSorteio(lotomania.dataProximoConcurso),
      prize: formatPrize(lotomania.valorEstimadoProximoConcurso),
    } : null,
  };

  return NextResponse.json(result, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
  });
}
