import { Trash2 } from "lucide-react";
import useCart from "../contexts/cart/useCart";
import type { CartType } from "../types/cart.type";
import { useEffect, useState } from "react";
import { getProductById } from "../features/products/productsApi";
import type { Product } from "../types/products.type";
import Loading from "./Loading";

type Props = { item: CartType };

function CartItemComponent({ item }: { item: Props }) {
  const { cart, incrementQuantity, decrementQuantity, removeItemFromCart } =
    useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { productId, name, imageUrl, price, quantity } = item.item;

  const selectedItem = cart.find((item) => item.productId === product?.id);
  const subtotal = selectedItem?.price! * selectedItem?.quantity!;

  useEffect(() => {
    let isMounted = true;

    async function fetchProduct() {
      if (!productId) {
        setError("Product not found");
        setIsLoading(false);
        return;
      }

      try {
        const product = await getProductById(productId);

        if (isMounted) {
          setProduct(product);
        }
      } catch (e) {
        if (isMounted) {
          setError(e instanceof Error ? e.message : "Failed to fetch product");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !product) {
    return (
      <main className="lg:ml-64 px-margin py-xl max-w-container-max mx-auto">
        <p className="rounded-lg border border-error/30 bg-error-container/30 px-md py-sm font-code-sm text-error">
          {error || "Product not found"}
        </p>
      </main>
    );
  }

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
              disabled={product?.stock! <= selectedItem?.quantity!}
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-on-surface-variant text-xs">
              ${subtotal.toFixed(2)} CAD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemComponent;
