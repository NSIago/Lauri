export function Footer() {
  return (
    <footer className="mt-auto relative z-20 text-white">
      <div className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-2xl text-center sm:text-left">
            <div className="shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold">Nossa Garantia</h3>
            </div>
            <div className="hidden sm:block h-10 w-px bg-white/20 mx-2"></div>
            <div>
              <h4 className="text-yellow-400 font-bold text-base sm:text-lg mb-1">Nossa Garantia</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-snug">
                Esta saída assegura que seu bolão da sorte participe premia a reta extra prontos e completa.
              </p>
            </div>
          </div>
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 sm:-mt-16 sm:-mb-8 shrink-0">
            <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white overflow-hidden shadow-xl">
              <img alt="Lauri" className="w-full h-full object-cover" src="https://i.imgur.com/ovdBFYv.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/80 py-4 sm:py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center justify-center">
            <img src="/logo2.png" alt="Lauri Ponto da Sorte" className="h-10 sm:h-12 w-auto object-contain" />
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            <a className="text-xs sm:text-sm font-bold text-white hover:text-yellow-400 uppercase tracking-wide" href="#">Sobre Nós</a>
            <a className="text-xs sm:text-sm font-bold text-white hover:text-yellow-400 uppercase tracking-wide" href="#">Como Funciona</a>
            <a className="text-xs sm:text-sm font-bold text-white hover:text-yellow-400 uppercase tracking-wide" href="#">Contato</a>
          </nav>
        </div>
        <div className="max-w-7xl mx-auto mt-4 sm:mt-6 text-center border-t border-white/10 pt-4">
          <p className="text-xs text-gray-400">
            Eu ainda vou colocar um texto aqui, mas não sei qual é o texto que vai ficar aqui ainda
          </p>
        </div>
      </div>
    </footer>
  );
}
