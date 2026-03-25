'use client';
import { Game, useStore } from '@/lib/store';

export function DuplaSenaHero({ game }: { game: Game }) {
  const { addToCart } = useStore();

  return (
    <div className="relative w-full">
      <div className="rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-[#d49e2a] shadow-[0_0_30px_rgba(196,22,28,0.6)] bg-duplasena-texture relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-30 mix-blend-overlay hidden sm:block">
          <span className="material-symbols-outlined text-white text-6xl rotate-12">casino</span>
        </div>
        <div className="absolute bottom-0 left-0 p-4 opacity-30 mix-blend-overlay hidden sm:block">
          <span className="material-symbols-outlined text-yellow-300 text-6xl -rotate-12">monetization_on</span>
        </div>

        <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center text-center">
          {/* Título */}
          <div className="mb-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-[#ff8a8a] bg-white/10 rounded-full p-1.5 sm:p-2">
                <span className="material-symbols-outlined text-3xl sm:text-4xl">looks_two</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight italic"
                style={{ fontFamily: "'Arial Black', sans-serif" }}
              >
                {game.title}
              </h2>
            </div>
            <div className="text-white font-bold text-xs sm:text-sm tracking-wide bg-[#8a0a0e]/50 px-4 py-1 rounded-full border border-[#d49e2a]/30">
              Concurso: {game.concurso} • Sorteio {game.sorteio}
            </div>
          </div>

          {/* Prêmio */}
          <div className="mb-6 sm:mb-8 relative">
            <div
              className="text-white text-2xl sm:text-4xl -rotate-6 font-bold relative z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: 'cursive' }}
            >
              Acumulou!
            </div>
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-black text-gradient-gold drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-none mt-2">
              {game.prize}
            </h3>
          </div>

          {/* Opções */}
          <div className="w-full max-w-2xl space-y-3 sm:space-y-4 mb-6">
            {game.options.map(opt => (
              <div
                key={opt.id}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer"
                onClick={() => addToCart(game, opt)}
              >
                <div className="duplasena-pill rounded-full border-[3px] border-[#d49e2a] px-3 sm:px-5 py-3 flex items-center justify-between flex-1 transition-transform hover:scale-[1.01] relative overflow-hidden min-w-0">
                  <span className="relative z-10 text-[#C4161C] font-black text-sm sm:text-xl uppercase whitespace-nowrap">
                    {opt.jogos} JOGOS
                  </span>
                  <span className="relative z-10 text-gray-400 font-bold mx-1 sm:mx-2 text-sm">/</span>
                  <span className="relative z-10 text-[#C4161C] font-black text-sm sm:text-xl uppercase whitespace-nowrap flex-1 text-left">
                    {opt.dezenas} DEZENAS
                  </span>
                  <div className="relative z-10 bg-[#C4161C] text-white px-3 sm:px-5 py-1 sm:py-1.5 rounded-full font-black text-sm sm:text-lg shadow-inner whitespace-nowrap ml-2">
                    R$ {opt.price.toFixed(2)}
                  </div>
                </div>
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

          {/* Logo */}
          <div className="mt-6 sm:mt-8 inline-flex bg-white rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-xl">
            <img src="/logo2.png" alt="Lauri Ponto da Sorte" className="h-9 sm:h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
