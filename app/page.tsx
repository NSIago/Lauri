'use client';
import { useStore } from '@/lib/store';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Cart } from '@/components/cart';
import { LotofacilHero } from '@/components/lotofacil-hero';
import { QuinaHero } from '@/components/quina-hero';
import { GameCard } from '@/components/game-card';
import Link from 'next/link';
import { Clover } from 'lucide-react';

export default function Home() {
  const { games } = useStore();

  const lotofacil = games.find(g => g.type === 'lotofacil');
  const megasena = games.find(g => g.type === 'megasena');
  const quina = games.find(g => g.type === 'quina');

  return (
    <>
      <div className="fixed top-20 left-10 text-yellow-500/20 rotate-12 pointer-events-none select-none z-0">
        <span className="material-symbols-outlined !text-[80px]">emoji_events</span>
      </div>
      <div className="fixed top-40 right-10 text-yellow-500/20 -rotate-12 pointer-events-none select-none z-0">
        <span className="material-symbols-outlined !text-[120px]">monetization_on</span>
      </div>
      <div className="fixed bottom-20 left-20 text-yellow-500/20 rotate-45 pointer-events-none select-none z-0">
        <Clover className="w-[100px] h-[100px]" />
      </div>

      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-6 py-8 relative z-10">
        <div className="text-center mb-10 mt-4 relative">
          <Link href="/admin" className="absolute right-0 top-0 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            Painel Admin
          </Link>
          <div className="inline-flex items-center justify-center mb-2">
            <Clover className="w-10 h-10 text-white/50" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-gradient-gold drop-shadow-lg leading-tight">
            Bolões Exclusivos<br/>
            <span className="text-white">Lauri Ponto da Sorte</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full space-y-12">
            {lotofacil?.active && <LotofacilHero game={lotofacil} />}

            {lotofacil?.active && (
              <div>
                <div className="bg-lauri-purple rounded-t-xl py-3 px-6 flex items-center justify-center gap-2 border-2 border-b-0 border-white/20 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                  <Clover className="w-6 h-6 text-white" />
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-wide">Lotofácil</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {lotofacil.options.slice(0, 2).map(opt => (
                    <GameCard key={opt.id} game={lotofacil} option={opt} color="purple" />
                  ))}
                </div>
              </div>
            )}

            {megasena?.active && (
              <div>
                <div className="bg-[#009933] rounded-t-xl py-3 px-6 flex items-center justify-center gap-2 border-2 border-b-0 border-white/20 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                  <Clover className="w-6 h-6 text-white" />
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-wide">Mega-Sena</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {megasena.options.map(opt => (
                    <GameCard key={opt.id} game={megasena} option={opt} color="green" />
                  ))}
                </div>
              </div>
            )}

            {quina?.active && <QuinaHero game={quina} />}
          </div>

          <div className="w-full lg:w-96 shrink-0 relative z-20">
            <Cart />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
