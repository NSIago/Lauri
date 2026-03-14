import { Clover } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto relative z-20 text-white">
      <div className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 max-w-2xl">
            <div className="shrink-0">
              <h3 className="text-2xl font-bold">Nossa Garantia</h3>
            </div>
            <div className="h-10 w-px bg-white/20 mx-2 hidden md:block"></div>
            <div>
              <h4 className="text-yellow-400 font-bold text-lg mb-1">Nossa Garantia</h4>
              <p className="text-sm text-gray-300 leading-snug">
                Esta saída assegura que seu bolão da sorte participe premia a reta extra prontos e completa.
              </p>
            </div>
          </div>
          <div className="relative w-32 h-32 md:-mt-16 md:-mb-8">
            <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white overflow-hidden shadow-xl">
              <img alt="Owner" className="w-full h-full object-cover" src="https://i.imgur.com/ovdBFYv.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/80 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="bg-white px-4 py-2 rounded-lg flex flex-col items-center">
            <div className="flex items-center gap-1 text-lauri-green">
              <Clover className="w-6 h-6 fill-lauri-green text-lauri-green" />
              <span className="text-xl font-black tracking-tighter text-black">Lauri</span>
            </div>
            <span className="bg-yellow-400 text-black text-[8px] font-bold px-1 rounded-sm w-full text-center uppercase tracking-wider -mt-1">Ponto da Sorte</span>
          </div>
          <nav className="flex gap-6 md:gap-10">
            <a className="text-sm font-bold text-white hover:text-yellow-400 uppercase tracking-wide" href="#">Sobre Nós</a>
            <a className="text-sm font-bold text-white hover:text-yellow-400 uppercase tracking-wide" href="#">Como Funciona</a>
            <a className="text-sm font-bold text-white hover:text-yellow-400 uppercase tracking-wide" href="#">Contato</a>
          </nav>
        </div>
        <div className="max-w-7xl mx-auto mt-6 text-center border-t border-white/10 pt-4">
          <p className="text-xs text-gray-400">
            Este jogo responsável de logo do qundo neoomorresiios veits interesenario de iambeto. Conacao responsável, entie se muito scivere.
          </p>
        </div>
      </div>
    </footer>
  );
}
