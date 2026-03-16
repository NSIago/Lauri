export function Header() {
  return (
    <header className="bg-white border-b-4 border-lauri-green px-3 sm:px-4 py-2 lg:px-8 z-50 relative shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo2.png" alt="Lauri Ponto da Sorte" className="h-14 sm:h-20 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide">Contato:</span>
            <a
              href="https://wa.me/5565992555412"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-lauri-green font-black text-base sm:text-xl hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[24px]">chat</span>
              <span className="text-sm sm:text-xl">(65) 99255-5412</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
