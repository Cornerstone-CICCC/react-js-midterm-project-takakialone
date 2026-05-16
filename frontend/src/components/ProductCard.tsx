import { Link } from "react-router";
import type { Product } from "../types/products.type";
import useCart from "../contexts/cart/useCart";

type Props = { product: Product };

function ProductCard({ product }: Props) {
  const { id, imgUrl, name, description, price, stock } = product;
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      productId: id,
      name,
      price,
      quantity: 1,
      imageUrl: imgUrl,
    });
  }

  return (
    <div className="group bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden hover:border-primary-fixed-dim/50 transition-all duration-300 flex flex-col">
      <Link to={`/products/${id}`}>
        <div className="relative h-64 overflow-hidden">
          {imgUrl ? (
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              data-alt="A macro shot of vibrant, translucent blue crystals arranged on a dark metallic surface. The crystals glow from within with a neon cyan light, casting sharp reflections on the surrounding blackened industrial environment. The aesthetic is gritty yet high-tech, using a cyberpunk color palette of deep navy and electric teal with high contrast and sharp focus."
              src={imgUrl}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-surface-container-high">
              No image
            </div>
          )}

          <div className="absolute top-sm left-sm px-xs py-0.5 bg-primary-container text-on-primary-container font-label-mono text-[10px] font-bold rounded">
            PURITY: 99.1%
          </div>
        </div>
      </Link>
      <div className="p-md flex flex-col flex-1">
        <span className="font-label-mono text-[10px] text-secondary tracking-widest uppercase mb-xs">
          Alchemical
        </span>
        <div className="flex justify-between">
          <h3 className="font-headline-md text-headline-md text-on-background mb-base group-hover:text-primary-fixed-dim transition-colors">
            {name}
          </h3>
          {stock > 0 ? (
            <span className="bg-primary-fixed px-2 py-1 rounded-lg text-on-primary">
              In stock
            </span>
          ) : (
            <span className="bg-error px-2 py-1 rounded-lg text-[#ff6b8e]">
              Out of stock
            </span>
          )}
        </div>
        <div className="flex flex-col items-start justify-between mt-auto gap-2">
          <span className="text-[15px] text-on-surface-variant font-label-mono uppercase">
            {description}
          </span>
          <span className="font-label-mono text-headline-md text-primary-fixed-dim">
            ${price}
          </span>
        </div>
        <div className="mt-md space-y-xs">
          <div className="flex justify-between text-[10px] font-label-mono text-on-surface-variant">
            <span>STOCK_INTEGRITY</span>
            <span>CRITICAL (12%)</span>
          </div>
          <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full w-[12%] bg-error scanning-animation"></div>
          </div>
        </div>

        <button
          className="w-full mt-md py-sm bg-primary-container text-on-primary-container font-headline-md text-[14px] font-black bloom-primary transition-all active:scale-95 uppercase disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleAddToCart}
          disabled={stock <= 0}
        >
          ADD_TO_CART
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
