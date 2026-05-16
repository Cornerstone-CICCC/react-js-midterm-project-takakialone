import { Trash2 } from "lucide-react";
import useCart from "../contexts/cart/useCart";
import type { CartType } from "../types/cart.type";

type Props = { product: CartType };

function CartItemComponent({ product }: { product: Props }) {
  const { incrementQuantity, decrementQuantity, removeItemFromCart } =
    useCart();
  const { productId, name, imageUrl, price, quantity } = product.product;
  return (
    <div className="glass-card flex gap-md p-md group">
      <div className="w-32 h-32 shrink-0 bg-surface-container overflow-hidden rounded-sm border border-outline-variant/30">
        {imageUrl ? (
          <img
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            data-alt="A macro shot of vibrant, translucent blue crystals arranged on a dark metallic surface. The crystals glow from within with a neon cyan light, casting sharp reflections on the surrounding blackened industrial environment. The aesthetic is gritty yet high-tech, using a cyberpunk color palette of deep navy and electric teal with high contrast and sharp focus."
            src={imageUrl}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-surface-container-high">
            No image
          </div>
        )}
      </div>
      <div className="grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-headline-md text-headline-md text-primary">
              {name}
            </h3>
            <button
              className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors"
              type="button"
              onClick={() => removeItemFromCart(productId)}
            >
              <Trash2 />
            </button>
          </div>
          <p className="font-label-mono text-label-mono text-on-surface-variant mt-xs">
            ID: {productId}
          </p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-xs">
            <button
              className="w-8 h-8 flex items-center justify-center border border-outline-variant text-on-surface hover:bg-surface-variant"
              type="button"
              onClick={() => decrementQuantity(productId)}
            >
              -
            </button>
            <span className="font-label-mono px-sm">{quantity}</span>
            <button
              className="w-8 h-8 flex items-center justify-center border border-outline-variant text-on-surface hover:bg-surface-variant"
              type="button"
              onClick={() => incrementQuantity(productId)}
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-on-surface-variant text-xs">${price} CAD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemComponent;
