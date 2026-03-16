'use client';
import { useStore } from '@/lib/store';

export function Cart() {
  const { cart, removeFromCart, cartTotal } = useStore();

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*NOVO PEDIDO - LAURI PONTO DA SORTE*\n\n`;
    cart.forEach(item => {
      message += `🎲 *${item.gameTitle}*\n`;
      message += `└ ${item.quantity}x ${item.jogos} Jogos - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n💰 *TOTAL: R$ ${cartTotal.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5565992555412?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="sticky top-24 bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="bg-gray-100 p-3 sm:p-4 border-b border-gray-200">
        <h3 className="text-lg sm:text-xl font-black text-black uppercase text-center">Meu Carrinho</h3>
      </div>
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 py-4 font-medium text-sm sm:text-base">
            Seu carrinho está vazio.
          </p>
        ) : (
          <>
            <div className="max-h-48 sm:max-h-64 overflow-y-auto pr-1 sm:pr-2 space-y-2 sm:space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-2">
                  <div className="text-xs sm:text-sm text-black">
                    <p className="font-bold">{item.quantity}x {item.gameTitle} - {item.jogos} Jogos</p>
                    <p className="text-gray-500">(R$ {(item.price * item.quantity).toFixed(2)})</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors ml-2"
                  >
                    <span className="material-symbols-outlined !text-[18px] sm:!text-[20px]">delete</span>
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-1 sm:pt-2">
              <span className="font-bold text-black uppercase text-sm sm:text-base">Subtotal</span>
              <span className="font-black text-green-700 text-lg sm:text-xl">R$ {cartTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#00bb2d] hover:bg-[#009824] text-white rounded-lg p-2 flex items-center justify-center gap-2 sm:gap-3 transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined !text-[28px] sm:!text-[36px]">chat</span>
              <div className="flex flex-col items-start leading-none py-1">
                <span className="font-black text-base sm:text-lg uppercase">Finalizar Pedido</span>
                <span className="font-bold text-xs opacity-90">Via WhatsApp</span>
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
