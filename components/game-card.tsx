'use client';
import { Game, GameOption, useStore } from '@/lib/store';

export function GameCard({ game, option, color }: { game: Game, option: GameOption, color: 'purple' | 'green' | 'blue' | 'red' | 'orange' }) {
  const { addToCart } = useStore();

  const colorMap: Record<string, string> = {
    purple: 'bg-lauri-purple',
    green: 'bg-[#009933]',
    blue: 'bg-quina-blue',
    red: 'bg-duplasena-red',
    orange: 'bg-lotomania-orange',
  };

  const headerColor = colorMap[color] || 'bg-lauri-purple';

  return (
    <div className="bg-white rounded-xl border-4 border-[#d49e2a] p-1 shadow-2xl overflow-hidden">
      <div className={`${headerColor} py-2 text-center rounded-t-lg`}>
        <h3 className="text-lg sm:text-2xl font-black text-white uppercase italic">{game.title}</h3>
      </div>
      <div className="p-3 sm:p-4 flex flex-col items-center text-center bg-white text-black">
        <p className="text-xs sm:text-sm font-bold text-gray-600 mb-1">CONCURSO: {game.concurso}</p>
        <h4 className="text-base sm:text-xl font-black leading-tight mb-3 sm:mb-4">
          {option.jogos} JOGOS / {option.dezenas} DEZENAS
        </h4>
        <div className="text-3xl sm:text-4xl font-black text-green-700 mb-3 sm:mb-4 tracking-tight">
          R$ {option.price.toFixed(2)}
        </div>
        <button
          onClick={() => addToCart(game, option)}
          className="w-full bg-[#00bb2d] hover:bg-[#009824] text-white font-black uppercase text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-lg shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
