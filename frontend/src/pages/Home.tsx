import { useEffect, useState } from "react";
import { type Product } from "../types/products.type";
import { getAllProducts } from "../features/products/productsApi";
import HomeHeader from "../components/HomeHeader";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        const products = await getAllProducts();

        if (isMounted) {
          setProducts(products);
        }
      } catch (e) {
        if (isMounted) {
          setError(e instanceof Error ? e.message : "Failed to fetch products");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <HomeHeader />
      <div className="flex flex-col gap-4 mx-4">
        <div className="mt-3">
          <h1 className="font-headline-lg text-headline-lg text-primary-fixed-dim uppercase tracking-tighter mb-xs">
            FORBIDDEN CARGO
          </h1>
          <p className="font-label-mono text-label-mono text-on-surface-variant max-w-2xl mb-5">
            VERIFIED VENDOR LISTINGS. ALL QUANTITIES MEASURED IN METRIC
            STANDARDS. NO QUESTIONS ASKED, NO REFUNDS GIVEN.
          </p>
        </div>
        {isLoading && <Loading />}
        {error && (
          <p className="rounded-lg border border-error/30 bg-error-container/30 px-md py-sm font-code-sm text-error">
            {error}
          </p>
        )}
        {!isLoading && !error && products.length === 0 && (
          <p className="font-label-mono text-label-mono text-on-surface-variant">
            NO PRODUCTS FOUND.
          </p>
        )}
        {!isLoading && !error && products.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-gutter">
            {products.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

export default Home;
