import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartType } from "../types/cart.type";
import useCart from "../contexts/cart/useCart";

type Props = { item: CartType };

function CheckoutItem({ item }: Props) {
  const { imageUrl, name, productId, price, quantity } = item;
  const { incrementQuantity, decrementQuantity, removeItemFromCart } =
    useCart();

  const total = (price * quantity).toFixed(2);
  return (
    <div className="flex gap-md p-md bg-white/5 rounded hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-primary-container">
      <div className="w-24 h-24 bg-surface-container rounded overflow-hidden shrink-0">
        <img
          alt="Night Capsule"
          className="w-full h-full object-cover"
          data-alt="A futuristic, sleek matte black liquid container with glowing emerald green structural lines and digital readouts on its surface. The object is set against a dark, foggy warehouse environment with purple atmospheric lighting and cinematic depth of field."
          src={imageUrl}
        />
      </div>
      <div className="grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h4 className="font-headline-md text-body-md font-bold uppercase">
              {name}
            </h4>
            <span className="font-price-tag text-secondary">${total}CAD</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-on-surface-variant">
            <button className="hover:text-primary transition-colors">
              <Minus
                className="material-symbols-outlined text-sm"
                onClick={() => decrementQuantity(productId)}
              />
            </button>
            <span className="font-terminal-sm text-primary">{quantity}</span>
            <button
              className="hover:text-primary transition-colors"
              onClick={() => incrementQuantity(productId)}
            >
              <Plus className="material-symbols-outlined text-sm" />
            </button>
          </div>
          <button
            className="font-terminal-sm text-error/60 hover:text-error transition-colors flex items-center gap-1"
            onClick={() => removeItemFromCart(productId)}
          >
            <Trash2 className="material-symbols-outlined text-sm" />
            PURGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
