'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type GameOption = {
  id: string;
  jogos: number;
  dezenas: number;
  price: number;
};

export type Game = {
  id: string;
  type: 'lotofacil' | 'megasena' | 'quina';
  title: string;
  concurso: string;
  sorteio: string;
  prize: string;
  active: boolean;
  options: GameOption[];
};

export type CartItem = {
  id: string;
  gameId: string;
  gameTitle: string;
  optionId: string;
  jogos: number;
  price: number;
  quantity: number;
};

const defaultGames: Game[] = [
  {
    id: 'loto-1',
    type: 'lotofacil',
    title: 'Lotofácil',
    concurso: '3620',
    sorteio: '24/02',
    prize: '6,5 MILHÕES',
    active: true,
    options: [
      { id: 'opt-1', jogos: 18, dezenas: 15, price: 28 },
      { id: 'opt-2', jogos: 36, dezenas: 15, price: 56 },
      { id: 'opt-3', jogos: 54, dezenas: 15, price: 84 },
      { id: 'opt-4', jogos: 90, dezenas: 15, price: 140 },
    ]
  },
  {
    id: 'mega-1',
    type: 'megasena',
    title: 'Mega-Sena',
    concurso: '2978',
    sorteio: '12/02',
    prize: '34 MILHÕES',
    active: true,
    options: [
      { id: 'opt-5', jogos: 6, dezenas: 7, price: 34 },
      { id: 'opt-6', jogos: 18, dezenas: 7, price: 102 },
    ]
  },
  {
    id: 'quina-1',
    type: 'quina',
    title: 'Quina',
    concurso: '6952',
    sorteio: '12/02',
    prize: '18 MILHÕES',
    active: true,
    options: [
      { id: 'opt-7', jogos: 10, dezenas: 6, price: 27 },
      { id: 'opt-8', jogos: 20, dezenas: 6, price: 54 },
      { id: 'opt-9', jogos: 30, dezenas: 6, price: 81 },
      { id: 'opt-10', jogos: 40, dezenas: 6, price: 108 },
      { id: 'opt-11', jogos: 50, dezenas: 6, price: 135 },
    ]
  }
];

type StoreContextType = {
  games: Game[];
  updateGame: (game: Game) => void;
  cart: CartItem[];
  addToCart: (game: Game, option: GameOption) => void;
  removeFromCart: (itemId: string) => void;
  cartTotal: number;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [games, setGames] = useState<Game[]>(defaultGames);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedGames = localStorage.getItem('lauri_games');
    if (savedGames) {
      try {
        setGames(JSON.parse(savedGames));
      } catch (e) {}
    }
    const savedCart = localStorage.getItem('lauri_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {}
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('lauri_games', JSON.stringify(games));
      } catch (e) {
        console.error('Error saving games to localStorage:', e);
      }
    }
  }, [games, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('lauri_cart', JSON.stringify(cart));
      } catch (e) {
        console.error('Error saving cart to localStorage:', e);
      }
    }
  }, [cart, isLoaded]);

  const updateGame = (updatedGame: Game) => {
    setGames(games.map(g => g.id === updatedGame.id ? updatedGame : g));
  };

  const addToCart = (game: Game, option: GameOption) => {
    setCart(prev => {
      const existing = prev.find(item => item.optionId === option.id);
      if (existing) {
        return prev.map(item => item.optionId === option.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, {
        id: Math.random().toString(36).substring(7),
        gameId: game.id,
        gameTitle: game.title,
        optionId: option.id,
        jogos: option.jogos,
        price: option.price,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <StoreContext.Provider value={{ games, updateGame, cart, addToCart, removeFromCart, cartTotal }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
