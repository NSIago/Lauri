'use client';
import { Game, useStore } from '@/lib/store';
import { Clover } from 'lucide-react';

export function LotofacilHero({ game }: { game: Game }) {
  const { addToCart } = useStore();

  return (
    <div className="relative w-full">
      <div className="rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-[#d49e2a] shadow-[0_0_35px_rgba(157,59,245,0.6)] bg-loto-final-zero relative overflow-hidden">
        {/* Decorativos */}
        <div className="absolute top-6 left-6 opacity-40 animate-float hidden sm:block">
          <span className="material-symbols-outlined text-[#ffd700] text-4xl drop-shadow-md">monetization_on</span>
        </div>
        <div className="absolute bottom-16 right-6 opacity-30 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
          <span className="material-symbols-outlined text-[#ffd700] text-5xl drop-shadow-md">monetization_on</span>
        </div>
        <div className="absolute top-16 right-16 opacity-20 hidden sm:block">
          <Clover className="text-[#a030ff] w-16 h-16 rotate-12" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center text-center">
          {/* Título */}
          <div className="mb-2 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1">
              <Clover className="text-white w-8 h-8 sm:w-12 sm:h-12 drop-shadow-lg" />
              <h2
                className="text-4xl sm:text-5xl md:text-7xl font-black uppercase text-white tracking-tighter italic drop-shadow-[0_4px_0_#4a0072]"
                style={{ fontFamily: "'Arial Black', sans-serif" }}
              >
                {game.title}
              </h2>
            </div>
            <div className="text-white font-bold text-xs sm:text-sm tracking-wide bg-purple-900/50 px-4 py-1 rounded-full border border-purple-400/30 backdrop-blur-sm">
              Concurso: {game.concurso} • Sorteio {game.sorteio}
            </div>
          </div>

          {/* Prêmio */}
          <div className="mb-6 sm:mb-8 relative flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1 bg-gradient-to-r from-transparent via-purple-900/60 to-transparent px-6 py-1">
              <span className="text-lg sm:text-2xl font-black text-white italic tracking-wide uppercase">FINAL ZERO</span>
            </div>
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-black text-gradient-gold drop-shadow-[0_6px_6px_rgba(0,0,0,0.8)] leading-none glow-text">
              {game.prize}
            </h3>
          </div>

          {/* Opções */}
          <div className="w-full max-w-2xl space-y-3 sm:space-y-4 mb-6">
            {game.options.map(opt => (
              <div
                key={opt.id}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
                onClick={() => addToCart(game, opt)}
              >
                {/* Pill */}
                <div className="group loto-pill rounded-full border-[3px] border-[#d49e2a] px-3 sm:px-5 py-3 flex items-center justify-between flex-1 transition-transform hover:scale-[1.01] relative overflow-hidden min-w-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f0ebff] to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                  <span className="relative z-10 text-[#aa00ff] font-black text-sm sm:text-xl uppercase whitespace-nowrap">
                    {opt.jogos} JOGOS
                  </span>
                  <span className="relative z-10 text-gray-400 font-bold mx-1 sm:mx-2 text-sm">/</span>
                  <span className="relative z-10 text-[#aa00ff] font-black text-sm sm:text-xl uppercase whitespace-nowrap flex-1 text-left">
                    {opt.dezenas} DEZENAS
                  </span>
                  <div className="relative z-10 bg-[#aa00ff] text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full font-black text-sm sm:text-lg shadow-inner whitespace-nowrap border border-[#d49e2a] ml-2">
                    R$ {opt.price.toFixed(2)}
                  </div>
                </div>
                {/* Botão fora da pill para não ser cortado */}
                <button
                  className="bg-[#00bb2d] hover:bg-[#009824] active:scale-95 text-white rounded-full shadow-lg border-2 border-white shrink-0 transition-transform flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14"
                  title="Adicionar ao Carrinho"
                  onClick={e => { e.stopPropagation(); addToCart(game, opt); }}
                >
                  <span className="material-symbols-outlined text-[22px] sm:text-[28px]">add_shopping_cart</span>
                </button>
              </div>
            ))}
          </div>

          {/* Frase */}
          <div className="text-center mb-16 sm:mb-20 px-2 sm:px-4">
            <p className="text-white text-sm sm:text-lg md:text-xl italic font-medium drop-shadow-md leading-relaxed">
              {'"Já pagamos '}<span className="font-black text-[#ffd700]">10 prêmios principais</span>{' só na Lotofácil'}
              <br />
              {' e o próximo pode ser o seu!"'}
            </p>
          </div>

          {/* Logo */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-8 z-20 bg-white rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-xl">
            <img src="/logo2.png" alt="Lauri Ponto da Sorte" className="h-9 sm:h-12 w-auto object-contain" />
          </div>

          {/* Foto */}
          <div className="absolute bottom-0 right-0 w-32 sm:w-44 md:w-56 h-44 sm:h-60 md:h-80 pointer-events-none z-10 translate-x-4 sm:translate-x-8 md:translate-x-12">
            <img
              alt="Lauri"
              className="w-full h-full object-contain object-right-bottom"
              src="/laurip3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
