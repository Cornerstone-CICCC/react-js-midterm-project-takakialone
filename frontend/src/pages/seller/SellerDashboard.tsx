import { useEffect, useState } from "react";
import SellerDashboardStats from "../../components/seller/SellerDashboardStats";
import { type SellerProduct } from "../../types/sellerProducts.type";
import { getAllSellerProducts } from "../../features/seller/sellerProductApi";
import SellerDashboardTableItem from "../../components/seller/SellerDashboardTableItem";

function SellerDashboard() {
  const [products, setProducts] = useState<SellerProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function getAndSetSellerProducts() {
    const data = await getAllSellerProducts();
    setProducts(data);
  }
  useEffect(() => {
    try {
      setError(null);
      setIsLoading(true);
      getAndSetSellerProducts();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const activeProducts = products.filter((p) => p.isActive !== false);
  const inventoryValue = products
    .reduce((sum, cur) => sum + cur.price + cur.stock, 0)
    .toFixed(2);

  return (
    <main className="ml-64 p-xl max-w-350">
      <header className="mb-xl flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary-fixed-dim drop-shadow-[0_0_10px_rgba(42,229,0,0.4)]">
            SELLER_CORE_v4.2
          </h1>
          <p className="font-code-sm text-code-sm text-on-surface-variant mt-xs">
            STABLE CONNECTION // ENCRYPTION: AES-256-GCM
          </p>
        </div>
        <button className="bg-primary-fixed-dim text-on-primary font-bold px-lg py-sm rounded-sm bloom-primary active:scale-95 transition-all flex items-center gap-xs">
          <span className="material-symbols-outlined">add_box</span>
          CREATE PRODUCT
        </button>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
        <SellerDashboardStats
          title="Total Products"
          content={String(products.length)}
        />
        <SellerDashboardStats
          title="Active Products"
          content={String(activeProducts.length)}
        />
        <SellerDashboardStats
          title="Inventory Value"
          content={String(inventoryValue)}
        />
      </section>
      <section className="mb-xl">
        <h3 className="font-headline-md text-headline-md text-on-background mb-md flex items-center gap-sm">
          <span className="material-symbols-outlined">inventory</span>
          CURRENT_INVENTORY
        </h3>
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="w-full text-left">
            <div className="flex bg-surface-container-high font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
              <div className="flex-2 p-md border-b border-outline-variant/30">
                Identifier
              </div>
              <div className="flex-1 p-md border-b border-outline-variant/30">
                Category
              </div>
              <div className="flex-1 p-md border-b border-outline-variant/30">
                Price (XMR)
              </div>
              <div className="flex-1 p-md border-b border-outline-variant/30">
                Stock
              </div>
              <div className="flex-1 p-md border-b border-outline-variant/30 text-right">
                Actions
              </div>
            </div>
            {products.length === 0 ? (
              <div className="flex justify-center items-center text-center text-xl mt-2">
                No data to show
              </div>
            ) : (
              <div className="font-body-md text-on-surface">
                {products.slice(0, 4).map((p) => (
                  <SellerDashboardTableItem
                    category="drug"
                    product={p}
                    key={p.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="mt-xl">
        <div className="bg-black/80 rounded-t-lg border-x border-t border-outline-variant/30 p-xs flex items-center gap-xs px-sm">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-error/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim/50"></div>
          </div>
          <span className="font-code-sm text-code-sm text-on-surface-variant ml-md">
            SYSTEM_LOGS.EXE
          </span>
        </div>
        <div className="bg-black/95 border-x border-b border-outline-variant/30 p-md font-code-sm text-primary-fixed-dim h-48 overflow-y-auto custom-scrollbar">
          <div className="mb-1">
            <span className="text-on-surface-variant">[14:02:11]</span> INIT
            SESSION: DREAD_PIRATE_AUTH_SUCCESSFUL
          </div>
          <div className="mb-1">
            <span className="text-on-surface-variant">[14:02:15]</span>{" "}
            DEPLOYING PROXY LAYER 1... OK
          </div>
          <div className="mb-1">
            <span className="text-on-surface-variant">[14:02:16]</span>{" "}
            DEPLOYING PROXY LAYER 2... OK
          </div>
          <div className="mb-1">
            <span className="text-on-surface-variant">[14:05:44]</span> NEW
            ORDER: ORDER_ID #88219-B RECEIVED (ESCROW_PENDING)
          </div>
          <div className="mb-1">
            <span className="text-on-surface-variant">[14:10:02]</span> SYSTEM
            SCAN COMPLETED. 0 VULNERABILITIES DETECTED.
          </div>
          <div className="mb-1">
            <span className="text-on-surface-variant">[14:12:19]</span>{" "}
            ENCRYPTED COMM: INCOMING MESSAGE FROM 'GHOST_DOG'...
          </div>
          <div className="mb-1 animate-pulse">
            <span className="text-on-surface-variant">[14:15:20]</span> WAITING
            FOR INPUT_
          </div>
        </div>
      </section>
    </main>
  );
}

export default SellerDashboard;
