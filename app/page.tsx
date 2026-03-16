'use client';
import { useStore } from '@/lib/store';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Cart } from '@/components/cart';
import { LotofacilHero } from '@/components/lotofacil-hero';
import { QuinaHero } from '@/components/quina-hero';
import { DuplaSenaHero } from '@/components/duplasena-hero';
import { LotomaniaHero } from '@/components/lotomania-hero';
import { GameCard } from '@/components/game-card';
import Link from 'next/link';
import { Clover } from 'lucide-react';

export default function Home() {
  const { games } = useStore();

  const lotofacil = games.find(g => g.type === 'lotofacil');
  const megasena = games.find(g => g.type === 'megasena');
  const quina = games.find(g => g.type === 'quina');
  const duplasena = games.find(g => g.type === 'duplasena');
  const lotomania = games.find(g => g.type === 'lotomania');

  return (
    <>
      {/* Decorativos de fundo - apenas desktop */}
      <div className="fixed top-20 left-10 text-yellow-500/20 rotate-12 pointer-events-none select-none z-0 hidden lg:block">
        <span className="material-symbols-outlined !text-[80px]">emoji_events</span>
      </div>
      <div className="fixed top-40 right-10 text-yellow-500/20 -rotate-12 pointer-events-none select-none z-0 hidden lg:block">
        <span className="material-symbols-outlined !text-[120px]">monetization_on</span>
      </div>
      <div className="fixed bottom-20 left-20 text-yellow-500/20 rotate-45 pointer-events-none select-none z-0 hidden lg:block">
        <Clover className="w-[100px] h-[100px]" />
      </div>

      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-5 sm:py-8 relative z-10">
        {/* Título da página */}
        <div className="text-center mb-6 sm:mb-10 mt-2 sm:mt-4 relative">
          <Link
            href="/admin"
            className="absolute right-0 top-0 bg-white/10 hover:bg-white/20 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[24px]">settings</span>
            <span className="hidden sm:inline">Painel Admin</span>
          </Link>
          <div className="inline-flex items-center justify-center mb-2">
            <Clover className="w-7 h-7 sm:w-10 sm:h-10 text-white/50" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-gradient-gold drop-shadow-lg leading-tight text-balance">
            Bolões Exclusivos<br />
            <span className="text-white">Lauri Ponto da Sorte</span>
          </h1>
        </div>

        {/* Layout principal: jogos + carrinho */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          {/* Lista de jogos */}
          <div className="flex-1 w-full space-y-8 sm:space-y-12">

            {/* Lotofácil hero */}
            {lotofacil?.active && <LotofacilHero game={lotofacil} />}

            {/* Lotofácil cards extras */}
            {lotofacil?.active && lotofacil.options.length > 2 && (
              <div>
                <div className="bg-lauri-purple rounded-t-xl py-2 sm:py-3 px-4 sm:px-6 flex items-center justify-center gap-2 border-2 border-b-0 border-white/20 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                  <Clover className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <h2 className="text-xl sm:text-3xl font-black text-white uppercase italic tracking-wide">Lotofácil</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                  {lotofacil.options.slice(2).map(opt => (
                    <GameCard key={opt.id} game={lotofacil} option={opt} color="purple" />
                  ))}
                </div>
              </div>
            )}

            {/* Mega-Sena */}
            {megasena?.active && (
              <div>
                <div className="bg-[#009933] rounded-t-xl py-2 sm:py-3 px-4 sm:px-6 flex items-center justify-center gap-2 border-2 border-b-0 border-white/20 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                  <Clover className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <h2 className="text-xl sm:text-3xl font-black text-white uppercase italic tracking-wide">Mega-Sena</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                  {megasena.options.map(opt => (
                    <GameCard key={opt.id} game={megasena} option={opt} color="green" />
                  ))}
                </div>
              </div>
            )}

            {/* Quina hero */}
            {quina?.active && <QuinaHero game={quina} />}

            {/* Dupla Sena hero */}
            {duplasena?.active && <DuplaSenaHero game={duplasena} />}

            {/* Lotomania hero */}
            {lotomania?.active && <LotomaniaHero game={lotomania} />}
          </div>

          {/* Carrinho lateral */}
          <div className="w-full lg:w-96 shrink-0 relative z-20">
            <Cart />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
