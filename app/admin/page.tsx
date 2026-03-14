'use client';
import { useStore, Game, GameOption } from '@/lib/store';
import { Header } from '@/components/header';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const { games, updateGame } = useStore();

  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-6 py-8 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">Painel Administrativo</h1>
          <Link href="/" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Voltar ao Site
          </Link>
        </div>

        <div className="space-y-8">
          {games.map(game => (
            <AdminGameEditor key={game.id} game={game} onUpdate={updateGame} />
          ))}
        </div>
      </main>
    </>
  );
}

function AdminGameEditor({ game, onUpdate }: { game: Game, onUpdate: (g: Game) => void }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedGame, setEditedGame] = useState<Game>(game);

  const handleSave = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onUpdate(editedGame);
    setIsEditing(false);
  };

  const handleOptionChange = (index: number, field: keyof GameOption, value: any) => {
    const newOptions = [...editedGame.options];
    newOptions[index] = { ...newOptions[index], [field]: value };
    setEditedGame({ ...editedGame, options: newOptions });
  };

  const addOption = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setEditedGame({
      ...editedGame,
      options: [...editedGame.options, { id: `opt-${Date.now()}`, jogos: 1, dezenas: 15, price: 10 }]
    });
  };

  const removeOption = (index: number, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const newOptions = [...editedGame.options];
    newOptions.splice(index, 1);
    setEditedGame({ ...editedGame, options: newOptions });
  };

  if (!isEditing) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-xl text-black">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black uppercase">{game.title}</h2>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${game.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {game.active ? 'Ativo' : 'Inativo'}
            </span>
          </div>
          <button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">edit</span> Editar
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div><span className="text-gray-500 font-bold">Concurso:</span> {game.concurso}</div>
          <div><span className="text-gray-500 font-bold">Sorteio:</span> {game.sorteio}</div>
          <div><span className="text-gray-500 font-bold">Prêmio:</span> {game.prize}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2 text-gray-700">Opções de Jogo ({game.options.length})</h3>
          <div className="flex flex-wrap gap-2">
            {game.options.map(opt => (
              <div key={opt.id} className="bg-white border border-gray-200 px-3 py-2 rounded shadow-sm text-sm">
                <span className="font-bold text-purple-700">{opt.jogos} Jogos</span> / {opt.dezenas} Dez - <span className="font-black text-green-700">R$ {opt.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-xl text-black border-4 border-blue-500">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black uppercase">Editando: {game.title}</h2>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={editedGame.active} onChange={(e) => setEditedGame({...editedGame, active: e.target.checked})} className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500" />
            <span className="font-bold text-gray-700">Ativar Jogo</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Concurso</label>
          <input type="text" value={editedGame.concurso} onChange={(e) => setEditedGame({...editedGame, concurso: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Data do Sorteio</label>
          <input type="text" value={editedGame.sorteio} onChange={(e) => setEditedGame({...editedGame, sorteio: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Prêmio Principal</label>
          <input type="text" value={editedGame.prize} onChange={(e) => setEditedGame({...editedGame, prize: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Opções de Jogo</h3>
          <button onClick={addOption} className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded-lg font-bold text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span> Adicionar Opção
          </button>
        </div>
        <div className="space-y-3">
          {editedGame.options.map((opt, index) => (
            <div key={opt.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 mb-1">Qtd. Jogos</label>
                <input type="number" value={opt.jogos} onChange={(e) => handleOptionChange(index, 'jogos', Number(e.target.value))} className="w-full border border-gray-300 rounded px-3 py-1.5" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 mb-1">Dezenas</label>
                <input type="number" value={opt.dezenas} onChange={(e) => handleOptionChange(index, 'dezenas', Number(e.target.value))} className="w-full border border-gray-300 rounded px-3 py-1.5" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 mb-1">Preço (R$)</label>
                <input type="number" value={opt.price} onChange={(e) => handleOptionChange(index, 'price', Number(e.target.value))} className="w-full border border-gray-300 rounded px-3 py-1.5" />
              </div>
              <div className="pt-5">
                <button onClick={() => removeOption(index)} className="text-red-500 hover:text-red-700 p-2 bg-red-50 rounded-lg">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <button onClick={() => setIsEditing(false)} className="px-6 py-2 rounded-lg font-bold text-gray-600 hover:bg-gray-100">Cancelar</button>
        <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold shadow-md">Salvar Alterações</button>
      </div>
    </div>
  );
}
