'use client';
import { Game, useStore } from '@/lib/store';

export function DuplaSenaHero({ game }: { game: Game }) {
  const { addToCart } = useStore();

  return (
    <div className="relative w-full">
      <div className="rounded-3xl border-[6px] border-[#d49e2a] shadow-[0_0_30px_rgba(196,22,28,0.6)] bg-duplasena-texture relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-40 mix-blend-overlay">
          <span className="material-symbols-outlined text-white text-6xl rotate-12">casino</span>
        </div>
        <div className="absolute bottom-0 left-0 p-4 opacity-40 mix-blend-overlay">
          <span className="material-symbols-outlined text-yellow-300 text-6xl -rotate-12">monetization_on</span>
        </div>

        <div className="relative z-10 px-6 py-8 flex flex-col items-center text-center">
          <div className="mb-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-[#ff8a8a] bg-white/10 rounded-full p-2">
                <span className="material-symbols-outlined text-4xl">looks_two</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase text-white tracking-tight italic" style={{ fontFamily: "'Arial Black', sans-serif" }}>{game.title}</h2>
            </div>
            <div className="text-white font-bold text-sm md:text-base tracking-wide bg-[#8a0a0e]/50 px-4 py-1 rounded-full border border-[#d49e2a]/30">
              Concurso: {game.concurso} - Sorteio {game.sorteio}
            </div>
          </div>

          <div className="mb-8 relative">
            <div className="font-handwriting text-white text-3xl md:text-5xl -rotate-6 font-script relative z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" style={{ fontFamily: "cursive" }}>
              Acumulou!
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-gradient-gold drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-none mt-2">
              {game.prize}
            </h3>
            <span className="absolute -right-8 top-10 material-symbols-outlined text-yellow-500 text-4xl animate-bounce">savings</span>
          </div>

          <div className="w-full max-w-2xl space-y-4">
            {game.options.map(opt => (
              <div key={opt.id} onClick={() => addToCart(game, opt)} className="group duplasena-pill rounded-full border-[3px] border-[#d49e2a] px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 transition-transform hover:scale-[1.02] cursor-pointer">
                <div className="flex flex-col md:flex-row items-center gap-2 text-[#C4161C] font-black text-lg md:text-xl uppercase flex-1 justify-center md:justify-start pl-0 md:pl-4">
                  <span>{opt.jogos} JOGOS</span>
                  <span className="hidden md:inline text-gray-400">/</span>
                  <span>{opt.dezenas} DEZENAS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#C4161C] text-white px-4 py-1 rounded-full font-black text-xl shadow-inner min-w-[120px]">
                    R$ {opt.price.toFixed(2)}
                  </div>
                  <button className="bg-[#00bb2d] hover:bg-[#009824] text-white p-2 rounded-full shadow-lg transition-transform active:scale-95" title="Adicionar ao Carrinho">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex bg-white rounded-xl px-3 py-2 shadow-xl">
            <img src="/logo2.png" alt="Lauri Ponto da Sorte" className="h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
