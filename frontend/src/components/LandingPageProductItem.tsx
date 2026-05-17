import { Link } from "react-router";
import type { Product } from "../types/products.type";
type Props = { product: Product };

function LandingPageProductItem({ product }: Props) {
  return (
    <div className="glass-panel group relative flex flex-col">
      <div className="relative h-70 overflow-hidden">
        <img
          alt="Night Capsule"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-alt="A glowing dark purple orb with digital light-pipe strokes, suggesting a futuristic energy core. The background is a dense void-black with soft refraction blurs. High-end retail packaging vibe."
          src={product.imgUrl}
        />
        <div className="absolute top-sm right-sm bg-surface/90 px-sm py-xs font-label-caps text-[10px] text-secondary border border-secondary/30">
          SKU: NC-098
        </div>
      </div>
      <div className="p-md bg-surface-container-high/40">
        <h3 className="font-headline-md text-[18px] text-on-surface mb-xs">
          {product.name}
        </h3>
        <div className="flex justify-between items-center mt-md">
          <span className="font-price-tag text-price-tag text-secondary glitch-hover">
            749.00 CR
          </span>
          <button className="p-sm bg-primary-container text-on-primary-container hover:shadow-[0_0_10px_#39ff14] transition-all">
            <Link to={`/products/${product.id}`}>Add to Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPageProductItem;
