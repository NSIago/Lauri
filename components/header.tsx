export function Header() {
  return (
    <header className="bg-white border-b-4 border-lauri-green px-4 py-0 lg:px-8 z-50 relative shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Lauri Ponto da Sorte" className="h-24 w-auto object-contain" />
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
