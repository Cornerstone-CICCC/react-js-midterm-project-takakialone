import { useState } from "react";
import type { CreateType } from "../../features/seller/SellerProductsType";
import { createSellerProduct } from "../../features/seller/sellerProductApi";

// name: string;
//   description: string;
//   price: number;
//   imgUrl?: string;
//   stock: number;
function SellerProductCreatePage() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  const [stock, setStock] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (typeof name !== "string" || name.trim() === "") {
      setError("name field is required");
      return;
    }
    if (typeof description !== "string" || description.trim() === "") {
      setError("description field is required");
      return;
    }

    if (typeof price !== "number" || price < 0) {
      setError("price needs to be positive number");
      return;
    }

    if (typeof stock !== "number" || stock < 0) {
      setError("stock needs to be positive integer");
      return;
    }

    const data = { name, description, price, stock, imgUrl };

    const returnedData = await createSellerProduct(data);
    console.log(returnedData);
  }

  return (
    <section className="md:col-span-9">
      <div className="mb-10">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight mb-2">
          INITIALIZE_LISTING
        </h1>
        <div className="flex items-center gap-3 font-terminal-sm text-terminal-sm">
          <span className="text-primary-fixed-dim flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
            LIVE_UPLINK
          </span>
          <span className="text-on-surface-variant/40">/</span>
          <span className="text-on-surface-variant/60">
            NODE_ID: 0x7F_SHADOW_SEC
          </span>
        </div>
      </div>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-primary-fixed-dim flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">
                  label
                </span>
                PRODUCT_ALIAS
              </label>
              <input
                className="w-full bg-surface-container-high/40 border border-outline-variant p-4 font-terminal-sm text-terminal-sm focus:border-primary-fixed focus:bg-primary-fixed/5 transition-all outline-none text-on-surface"
                placeholder="ENTER_ITEM_CODENAME..."
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">
                    payments
                  </span>
                  VALUATION [ETH/CR]
                </label>
                <input
                  className="w-full bg-surface-container-high/40 border border-outline-variant p-4 font-price-tag text-price-tag focus:border-secondary focus:bg-secondary/5 transition-all outline-none text-secondary"
                  placeholder="0.00"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">
                    inventory_2
                  </span>
                  NODE_AVAILABILITY
                </label>
                <input
                  className="w-full bg-surface-container-high/40 border border-outline-variant p-4 font-terminal-sm text-terminal-sm focus:border-on-surface focus:bg-on-surface/5 transition-all outline-none text-on-surface"
                  placeholder="1"
                  type="number"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-primary-fixed flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">
                  description
                </span>
                ENCRYPTED_METADATA
              </label>
              <textarea
                className="w-full bg-surface-container-high/40 border border-outline-variant p-4 font-terminal-sm text-terminal-sm focus:border-primary-fixed focus:bg-primary-fixed/5 transition-all outline-none text-on-surface resize-none"
                placeholder="DECODE_SPECS_HERE..."
                rows={6}
              ></textarea>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 h-full flex flex-col">
              <label className="font-label-caps text-label-caps text-primary-fixed-dim flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">
                  image
                </span>
                ASSET_DRAG_&amp;_DROP / IMG_URL
              </label>
              <div className="grow border-2 border-dashed border-outline-variant hover:border-primary-fixed/50 bg-surface-container-lowest/50 group cursor-terminal flex flex-col items-center justify-center p-8 transition-colors relative overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity"
                  data-alt="A high-tech digital interface overlay on a dark, glossy product surface, showcasing complex circuit patterns and glowing cyan data streams. The aesthetic is clean and futuristic with sharp focus on microchip architecture and a neon-lit cyber-grid atmosphere, reflecting a premium encrypted product listing."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9wOjx8WhvIflXWjEqKJ_RqHT-0j2_xOiMNlOrSlfnUU7Y2fHbyjTnS4hWu0fIumYJgYDcIESAlh7HwNUYGRareL7QcBhc3kjbGVXPGdLdU2jPQt5jbV7QcYAfqNKTd57X_N7uEVSaEkJQhn587FEdHCptnqSofJG44SXRB60M0oKD2dYwxETLSWI2ZQYn0mCqGQNKSvb1HPcycnaU4omIdf3XiH__D49hQGK-ZE9_pjgdCyBfX1YmgW44I7-nj3pOTCRIvPZ_GcY"
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4 group-hover:scale-110 transition-transform">
                    cloud_upload
                  </span>
                  <p className="font-terminal-sm text-terminal-sm text-on-surface mb-1">
                    STREAMS_PENDING_UPLINK
                  </p>
                  <p className="font-terminal-sm text-[12px] text-on-surface-variant/60">
                    CLICK_OR_DROP_PAYLOAD
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <input
                  className="w-full bg-surface-container-high/40 border border-outline-variant p-3 font-terminal-sm text-terminal-sm focus:border-primary-fixed outline-none text-on-surface"
                  placeholder="EXTERNAL_URL_INJECT..."
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-outline-variant/30">
          <div className="font-terminal-sm text-[12px] text-on-surface-variant/40 max-w-md">
            BY INITIALIZING THIS LISTING, YOU AGREE TO SHADOW_PROTOCOL TERMS.
            DATA WILL BE BROADCASTED ACROSS THE NULL-SECTOR MESH WITHIN 14MS.
          </div>
          <button
            className="w-full md:w-auto px-12 py-5 bg-primary-fixed text-on-primary-fixed font-display-lg text-[20px] tracking-tight hover:shadow-[0_0_30px_#79ff5b] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4"
            type="submit"
          >
            INITIALIZE_LISTING
            <span className="material-symbols-outlined">bolt</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default SellerProductCreatePage;
