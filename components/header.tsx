import { Clover } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b-4 border-lauri-green px-4 py-3 lg:px-8 z-50 relative shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-center gap-1 text-lauri-green">
              <Clover className="w-8 h-8 fill-lauri-green text-lauri-green" />
              <span className="text-3xl font-black tracking-tighter text-black">Lauri</span>
            </div>
            <span className="bg-yellow-400 text-black text-[10px] font-bold px-1 rounded-sm ml-9 -mt-1 uppercase tracking-wider">Ponto da Sorte</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Contato:</span>
            <div className="flex items-center gap-2 text-lauri-green font-black text-lg md:text-xl">
              <span className="material-symbols-outlined">chat</span>
              (65) 99255-5412
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
