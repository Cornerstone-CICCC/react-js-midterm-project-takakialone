import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { type Product } from "../types/products.type";
import { getProductById } from "../features/products/productsApi";
import { ShoppingCart } from "lucide-react";
import useCart from "../contexts/cart/useCart";
import Loading from "../components/Loading";
import HomeHeader from "../components/HomeHeader";

function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart, incrementQuantity, decrementQuantity, cart, setQuantity } =
    useCart();
  const selectedItem = cart.find((item) => item.productId === product?.id);

  useEffect(() => {
    let isMounted = true;

    async function fetchProduct() {
      if (!id) {
        setError("Product not found");
        setIsLoading(false);
        return;
      }

      try {
        const product = await getProductById(id);

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
  }, [id]);

  function handleAddToCart() {
    if (!product) return;

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imgUrl,
    });
  }

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
    <div>
      <HomeHeader />
      <main className="lg:ml-64 px-margin py-xl max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
          <div className="md:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to- from-primary-fixed-dim to-secondary rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-surface-container border border-outline-variant/30 rounded-lg overflow-hidden">
                <img
                  alt={product.name}
                  className="w-full h-auto aspect-square object-cover grayscale-30 hover:grayscale-0 transition-all duration-500"
                  data-alt="A macro shot of shimmering iridescent neon green and violet fine powder contained within a futuristic geometric glass vial. The vial sits on a dark reflective surface with a faint digital scanning laser grid illuminating it from the side. The atmosphere is mysterious and high-tech, with subtle light blooms and deep monochromatic shadows echoing a cyberpunk aesthetic."
                  src={product.imgUrl}
                />
                <div className="absolute top-md right-md flex items-center gap-xs bg-surface-container-lowest/80 px-sm py-xs rounded-full border border-primary-fixed-dim/30 backdrop-blur-md">
                  <span className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse"></span>
                  <span className="font-code-sm text-code-sm text-primary-fixed-dim uppercase tracking-widest">
                    In Stock: {product.stock}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-xs mb-xs">
              <div className="px-xs py-0.5 bg-secondary-container/10 text-secondary border border-secondary/30 font-label-mono text-[10px] rounded">
                RARE_GRADE
              </div>
              <div className="px-xs py-0.5 bg-primary-container/10 text-primary-fixed-dim border border-primary-fixed-dim/30 font-label-mono text-[10px] rounded">
                AUTHENTICATED
              </div>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-sm leading-none">
              {product.name}
            </h1>
            {/* <div className="flex items-center gap-md mb-lg">
            in the future add start review
          </div> */}
            <div className="bg-surface-container-high/50 p-md border border-outline-variant/20 rounded-xl mb-lg">
              <div className="flex items-end justify-between mb-sm">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant text-[10px] uppercase">
                    Current Market Value
                  </span>
                  <span className="font-headline-lg text-headline-md text-primary-fixed-dim">
                    ${product.price} CAD
                  </span>
                </div>
              </div>
              <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-primary-fixed-dim to-secondary w-2/3 shadow-[0_0_8px_rgba(42,229,0,0.5)]"></div>
              </div>
            </div>
            <div className="space-y-md mb-xl">
              <p className="text-body-md text-on-surface-variant">
                {product.description}
              </p>
              <div className="flex items-center gap-sm">
                <label className="font-label-mono text-label-mono text-on-surface-variant">
                  QUANTITY:
                </label>
                <div className="flex items-center bg-surface-container-lowest border border-outline-variant/30 rounded-lg">
                  <button
                    className="px-md py-xs text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
                    onClick={() => decrementQuantity(product.id)}
                    disabled={!selectedItem}
                  >
                    -
                  </button>
                  <input
                    className="w-12 bg-transparent text-center border-none focus:ring-0 font-label-mono text-primary-fixed-dim"
                    type="number"
                    min={0}
                    value={selectedItem?.quantity ?? 0}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setQuantity(product.id, Number(e.target.value))
                    }
                  />
                  <button
                    className="px-md py-xs text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
                    onClick={() =>
                      selectedItem
                        ? incrementQuantity(product.id)
                        : handleAddToCart()
                    }
                    disabled={selectedItem?.quantity! >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-sm">
              <button className="w-full py-md bg-primary-container text-on-primary font-headline-md text-headline-md rounded-lg flex items-center justify-center gap-sm hover:glow-primary active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined">encrypted</span>
                ENCRYPTED_PURCHASE
              </button>
              <button
                className="w-full py-md border border-secondary text-secondary font-headline-md text-headline-md rounded-lg flex items-center justify-center gap-sm hover:glow-secondary active:scale-[0.98] transition-all bg-secondary/5 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                <ShoppingCart />
                ADD_TO_VOID_CART
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-xl">
          <div className="md:col-span-1 bg-surface-container/40 p-md border border-outline-variant/20 rounded-xl">
            <h3 className="font-label-mono text-label-mono text-primary-fixed-dim mb-md flex items-center gap-xs">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>{" "}
              VENDOR_STATUS
            </h3>
            <div className="flex items-center gap-sm mb-sm">
              <img
                className="w-12 h-12 rounded bg-surface-variant border border-outline-variant/40 object-cover"
                data-alt="A portrait of a futuristic hacker wearing a high-tech sleek black visor and a hooded techwear jacket, illuminated by harsh violet and toxic green side lighting in a dark neon setting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQOfM8WF6DWm3m9mf-EUCjUliLuBng8WvIrNgja5ft01pmxl67lFB1G0konpeWK2JQb2w2jxS6CXZSuJW3EfxbNQcqUtJTvt2vYva49YYxXa9C-nn05mfHWfW6dlIp0jHcMIRS6ykjaGJCDvNJJditz-DtmsfuaDYxw4ze3Zz5oFDkVhyamjPdCcsuLJgqy9gD583XDmlMtz__ljdKvVQdLze5EStMlK9ePQT8vVfMT3cXvqQ-YE_dYVffHWAg870o3Cfqo9JItcg"
              />
              <div>
                <div className="font-headline-md text-body-lg text-on-background">
                  NEON_ALCHEMIST
                </div>
                <div className="text-xs text-on-surface-variant font-code-sm">
                  Level 99 Apothecary
                </div>
              </div>
            </div>
            <div className="space-y-xs font-code-sm text-[11px] text-on-surface-variant">
              <div className="flex justify-between">
                <span>SUCCESS_RATE:</span>
                <span className="text-primary-fixed-dim">99.8%</span>
              </div>
              <div className="flex justify-between">
                <span>DISPATCH_AVG:</span>
                <span>4.2 HOURS</span>
              </div>
              <div className="flex justify-between">
                <span>ESTABLISHED:</span>
                <span>ERA_04</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface-container/40 p-md border border-outline-variant/20 rounded-xl">
            <h3 className="font-label-mono text-label-mono text-secondary mb-md flex items-center gap-xs">
              <span className="material-symbols-outlined text-sm">
                local_shipping
              </span>{" "}
              LOGISTICS
            </h3>
            <div className="space-y-md">
              <div className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-on-surface-variant">
                  package
                </span>
                <div>
                  <div className="text-sm font-bold text-on-surface">
                    Stealth Packaging
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Vacuum sealed in anti-static Faraday shielding. Disguised as
                    "Vintage Board Game Parts".
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-on-surface-variant">
                  map
                </span>
                <div>
                  <div className="text-sm font-bold text-on-surface">
                    Global Dead-Drops
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Available in 42 major megacities. Remote drone delivery
                    available for extra fee.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 bg-error-container/10 p-md border border-error/20 rounded-xl">
            <h3 className="font-label-mono text-label-mono text-error mb-md flex items-center gap-xs">
              <span className="material-symbols-outlined text-sm">warning</span>{" "}
              PROTOCOL_WARNING
            </h3>
            <p className="text-xs font-code-sm text-error/80 leading-relaxed uppercase">
              THIS PRODUCT IS FOR EXTERNAL RESEARCH ONLY. DO NOT CONSUME NEAR
              OPEN FLAMES OR SENTIENT AI. SHADOWCART IS NOT RESPONSIBLE FOR
              ACCIDENTAL HIBERNATION, SPONTANEOUS TELEPORTATION, OR LOSS OF
              CRYPTO ASSETS DURING SLEEP. USE AT YOUR OWN PERIL.
            </p>
            <div className="mt-md pt-md border-t border-error/10">
              <div className="flex items-center gap-xs text-[10px] font-code-sm text-error/60">
                <span className="w-1 h-1 bg-error rounded-full animate-ping"></span>
                SYSTEM MONITORING ACTIVE
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetailPage;
