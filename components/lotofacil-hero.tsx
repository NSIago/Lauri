'use client';
import { Game, useStore } from '@/lib/store';
import Image from 'next/image';
import { Clover } from 'lucide-react';

export function LotofacilHero({ game }: { game: Game }) {
  const { addToCart } = useStore();

  return (
    <div className="relative w-full">
      <div className="rounded-3xl border-[6px] border-[#d49e2a] shadow-[0_0_35px_rgba(157,59,245,0.6)] bg-loto-final-zero relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-60 animate-float">
          <span className="material-symbols-outlined text-[#ffd700] text-5xl drop-shadow-md">monetization_on</span>
        </div>
        <div className="absolute bottom-20 right-10 opacity-50 animate-float" style={{ animationDelay: '1s' }}>
          <span className="material-symbols-outlined text-[#ffd700] text-6xl drop-shadow-md">monetization_on</span>
        </div>
        <div className="absolute top-20 right-20 opacity-30">
          <Clover className="text-[#a030ff] w-20 h-20 rotate-12" />
        </div>
        <div className="absolute bottom-10 left-20 opacity-30">
          <Clover className="text-[#a030ff] w-24 h-24 -rotate-12" />
        </div>
        
        <div className="relative z-10 px-6 py-8 flex flex-col items-center text-center">
          <div className="mb-2 flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-1">
              <Clover className="text-white w-12 h-12 drop-shadow-lg" />
              <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter italic drop-shadow-[0_4px_0_#4a0072]" style={{ fontFamily: "'Arial Black', sans-serif" }}>{game.title}</h2>
            </div>
            <div className="text-white font-bold text-sm md:text-base tracking-wide bg-purple-900/50 px-6 py-1 rounded-full border border-purple-400/30 backdrop-blur-sm">
              Concurso: {game.concurso} • Sorteio {game.sorteio}
            </div>
          </div>
          
          <div className="mb-8 relative flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2 bg-gradient-to-r from-transparent via-purple-900/60 to-transparent px-8 py-1">
              <span className="text-2xl font-black text-white italic tracking-wide uppercase">FINAL ZERO</span>
              <div className="relative">
                <span className="material-symbols-outlined text-[#ffd700] text-3xl">savings</span>
                <span className="material-symbols-outlined text-[#ffd700] text-xl absolute -top-1 -right-2 animate-bounce">attach_money</span>
              </div>
            </div>
            <h3 className="text-6xl md:text-8xl font-black text-gradient-gold drop-shadow-[0_6px_6px_rgba(0,0,0,0.8)] leading-none glow-text">
              {game.prize}
            </h3>
          </div>
          
          <div className="w-full max-w-2xl space-y-4 mb-6">
            {game.options.map(opt => (
              <div key={opt.id} onClick={() => addToCart(game, opt)} className="group loto-pill rounded-full border-[3px] border-[#d49e2a] px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 transition-transform hover:scale-[1.02] cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f0ebff] to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-2 text-loto-pill-text font-black text-lg md:text-xl uppercase flex-1 justify-center md:justify-start pl-0 md:pl-4">
                  <span className="text-2xl text-[#aa00ff]">{opt.jogos} JOGOS</span>
                  <span className="hidden md:inline text-gray-400">/</span>
                  <span className="text-[#aa00ff]">{opt.dezenas} DEZENAS</span>
                </div>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="bg-[#aa00ff] text-white px-5 py-1 rounded-full font-black text-xl shadow-inner min-w-[130px] border border-[#d49e2a]">
                    R$ {opt.price.toFixed(2)}
                  </div>
                  <button className="bg-[#00bb2d] hover:bg-[#009824] text-white p-2 rounded-full shadow-lg transition-transform active:scale-95 border-2 border-white" title="Adicionar ao Carrinho">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-6 px-4">
            <p className="text-white text-lg md:text-xl italic font-medium drop-shadow-md">
              "Já pagamos <span className="font-black text-[#ffd700]">10 prêmios principais</span> só na Lotofácil<br/>
              e o próximo pode ser o seu!"
            </p>
          </div>
          
          <div className="w-full flex justify-between items-end mt-4 px-2 md:px-8 relative h-32 md:h-40 pointer-events-none">
            <div className="absolute bottom-6 left-6 md:left-12 bg-white px-4 py-2 rounded-lg shadow-xl transform -rotate-2 z-20 pointer-events-auto">
              <div className="flex items-center gap-1 text-lauri-green">
                <Clover className="w-6 h-6 fill-lauri-green text-lauri-green" />
                <span className="text-xl font-black tracking-tighter text-black">Lauri</span>
              </div>
              <span className="bg-yellow-400 text-black text-[8px] font-bold px-1 rounded-sm w-full text-center uppercase tracking-wider -mt-1 block">Ponto da Sorte</span>
            </div>
            <div className="absolute bottom-0 right-0 h-48 md:h-64 w-40 md:w-56 overflow-visible z-10 pointer-events-none flex items-end justify-end">
              <img alt="Happy Winner" className="h-full w-full object-contain object-bottom transform translate-y-2 hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeBt5eMwRCQcWzAYWZWAXHIxbILIzIrV9Gc4ROMxGvqP0X7ThGlmKkIHZfuNXl0cOANKnaW9Ef5ohSIeJv_cDLHjz4KSofw47YUe9KUZO9UYBG5IaNV-iDkrsztZ3DJ3T7eRfYul3nOKoibunVKxJqWIhCQ_ktNedjJ8JrOXyEY_Yqqc0rwhMZv0FOqgpj_4V1Keo_UQpRLZ57TB4-R8pTlGzRwHH9ZSf_JqUgLQfTbTOdXk2y0If8Fip0zt94XVJtJSkM9eSlmhrs"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
