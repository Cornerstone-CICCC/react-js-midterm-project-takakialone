import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllProducts } from "../features/products/productsApi";
import LandingPageProductItem from "../components/LandingPageProductItem";
import type { Product } from "../types/products.type";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <div>
      <section className="relative min-h-230.25 flex items-center px-margin-desktop overflow-hidden">
        <div className="grid grid-cols-12 gap-gutter w-full z-10">
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-sm mb-lg px-sm py-xs border border-primary/30 w-fit bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#39ff14]"></span>
              <span className="font-terminal-sm text-terminal-sm text-primary tracking-widest uppercase">
                ENCRYPTED_SESSION: ACTIVE
              </span>
            </div>
            <h1 className="font-display-lg text-[64px] leading-tight text-on-surface mb-md">
              Welcome to the{" "}
              <span className="text-primary-container neon-text-green">
                Marketplace
              </span>{" "}
              They Told You Not to Find
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-125 mb-xl border-l-2 border-secondary/40 pl-md">
              The premiere encrypted hub for items the surface web forgot. From
              rare neural links to specialized shadow gear, browse the void with
              absolute anonymity.
            </p>
            <div className="flex gap-md">
              <Link
                to="/login"
                className="bg-primary-container text-on-primary-container px-xl py-md font-label-caps text-label-caps hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all"
              >
                ENTER_NODE
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="glass-panel neon-border-purple p-md rounded-xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="flex justify-between items-center mb-md border-b border-white/10 pb-sm">
                <span className="font-terminal-sm text-terminal-sm text-secondary">
                  DASHBOARD_V4.02
                </span>
                <div className="flex gap-xs">
                  <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                </div>
              </div>
              <img
                alt="Dashboard View"
                className="w-full h-100 object-cover rounded opacity-80"
                data-alt="A sophisticated digital UI dashboard display on a dark glass surface, featuring complex data visualizations, glowing neon green and purple circuit patterns, and monospaced terminal text. The aesthetic is high-end cyberpunk with soft background blurs and sharp digital grain. Lighting is dim with focus on the bioluminescent glow of the interface."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAedwFewPAPGMsKOmW4B2sQLPDQ_3Q-x-_QJN6nuU38kYMgxNUJCSze6pHb3oqlYgWDi2LR0J_vQjmJPXFWsa0j-7OLW-23Dk71cA7Qvaf6mG6Ik7Oc1wH4n5meSVSQ3BaJG5Uzy82Pz8JS0nAq0F5TZBSGVBn07eZfG2sDQ2tfGmHD4ryEpjaU6pqgkUT2U_cnhbmt9GAf4zsYX0pwMMymt4dRNriBq0owS0gyzwqKxjiYA5_xZzVyxdLEQOZcWnSnVm5Esg9y0Rc"
              />
              <div className="absolute -bottom-4 -left-4 glass-panel neon-border-green p-sm font-terminal-sm text-primary text-[10px]">
                LATEST_BREACH: 0.04s AGO
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary/5 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-secondary/5 blur-[100px] rounded-full -ml-20 -mb-20"></div>
      </section>
      <section className="py-xl px-margin-desktop bg-surface-container-lowest">
        <div className="grid grid-cols-12 gap-gutter max-w-360 mx-auto">
          <div className="col-span-12 md:col-span-4 glass-panel p-lg neon-border-green group cursor-pointer hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-primary text-[48px] mb-md group-hover:scale-110 transition-transform">
              visibility_off
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-sm">
              Anonymous Browsing
            </h3>
            <p className="font-body-md text-on-surface-variant">
              Zero logs. Zero footprints. Every session is tunneled through
              three layers of dynamic encryption.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 glass-panel p-lg border-white/10 group cursor-pointer hover:neon-border-purple hover:bg-secondary/5 transition-all">
            <span className="material-symbols-outlined text-secondary text-[48px] mb-md group-hover:scale-110 transition-transform">
              bolt
            </span>
            <h3 className="font-headline-md text-headline-md text-secondary mb-sm">
              Fast Cart Flow
            </h3>
            <p className="font-body-md text-on-surface-variant">
              One-click checkout using decentralized protocols. Items arrive at
              your drop before the trail goes cold.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 glass-panel p-lg border-white/10 group cursor-pointer hover:neon-border-green hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-primary text-[48px] mb-md group-hover:scale-110 transition-transform">
              security
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-sm">
              Seller Control
            </h3>
            <p className="font-body-md text-on-surface-variant">
              Multi-sig escrow and reputation scoring ensures that every credit
              spent gets you exactly what you ordered.
            </p>
          </div>
        </div>
      </section>
      <section className="py-xl px-margin-desktop">
        <div className="max-w-360 mx-auto">
          <div className="flex justify-between items-end mb-xl">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-xs block">
                ARCHIVE_INDEX
              </span>
              <h2 className="font-display-lg text-display-lg text-on-surface uppercase">
                Browse Categories
              </h2>
            </div>
            <div className="font-terminal-sm text-terminal-sm text-primary hover:underline cursor-pointer">
              <Link to="/products">VIEW_ALL_NODES &gt;&gt;</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-xl px-margin-desktop bg-surface-container-low">
        <div className="max-w-360 mx-auto">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-xl border-b border-white/5 pb-sm">
            LATEST_UPLOADS
          </h2>
          <div className="grid grid-cols-4 gap-gutter">
            {!error &&
              products
                .slice(0, 4)
                .map((p) => <LandingPageProductItem key={p.id} product={p} />)}
          </div>
        </div>
      </section>
      <section className="py-xl px-margin-desktop bg-surface overflow-hidden relative">
        <div className="grid grid-cols-12 gap-gutter items-center max-w-360 mx-auto">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-md">
              Immutable Trust in a Mutable World
            </h2>
            <p className="font-body-md text-on-surface-variant mb-lg">
              Our protocol utilizes proprietary shadow-sharding to ensure that
              no single node holds the full truth of your transaction. Even if
              the network is breached, your data remains a ghost in the shell.
            </p>
            <div className="space-y-sm">
              <div className="flex items-center gap-md p-sm glass-panel border-l-4 border-l-primary">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                <span className="font-terminal-sm text-terminal-sm">
                  MULTI_SIG_VERIFIED_PROTOCOL_STABLE
                </span>
              </div>
              <div className="flex items-center gap-md p-sm glass-panel border-l-4 border-l-secondary">
                <span className="material-symbols-outlined text-secondary">
                  database
                </span>
                <span className="font-terminal-sm text-terminal-sm">
                  DECENTRALIZED_LEDGER_SYNCED: 100%
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="glass-panel p-md font-terminal-sm text-[12px] text-primary bg-black/40 border border-white/5 shadow-2xl">
              <div className="flex gap-md mb-md border-b border-primary/20 pb-xs">
                <span className="text-primary font-bold">
                  [ SYSTEM_MONITOR ]
                </span>
                <span className="text-on-surface-variant">LOGS</span>
                <span className="text-on-surface-variant">TRAFFIC</span>
                <span className="text-on-surface-variant">PEERS</span>
              </div>
              <div className="space-y-1 font-terminal-sm">
                <p className="text-primary-container">
                  AUTH_STATUS:{" "}
                  <span className="bg-primary-container/20 px-xs">ACTIVE</span>
                </p>
                <p>&gt; Initializing Tor_Bridge... [ OK ]</p>
                <p>&gt; Handshake with Node_092... [ OK ]</p>
                <p>&gt; Packet decryption sequence 0.22... [ COMPLETE ]</p>
                <p className="text-secondary">
                  &gt; WARNING: EXTERNAL PING DETECTED. DEFLECTING...
                </p>
                <p>&gt; Ghost-IP cycling initialized. Next hop: Helsinki.</p>
                <p className="pt-sm">&gt; SESSION_Uptime: 00:14:02</p>
                <p>&gt; ENCRYPTION_LEVEL: OMEGA_IV</p>
                <div className="flex gap-xs mt-md">
                  <div className="w-full h-1 bg-white/10 overflow-hidden">
                    <div className="h-full bg-primary-container w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-xl px-margin-desktop">
        <div className="max-w-360 mx-auto">
          <div className="relative bg-linear-to-br from-surface-container-high to-surface p-0.5 rounded-xl neon-border-green">
            <div className="bg-surface rounded-xl p-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none"></div>
              <h2 className="font-display-lg text-display-lg text-on-surface mb-md relative z-10">
                Ready to Peer into the Void?
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-150 mx-auto mb-xl relative z-10">
                Join over 50,000 anonymous agents trading on the world's most
                secure decentralized marketplace. No email, no name, no
                compromise.
              </p>
              <div className="flex flex-col items-center gap-md relative z-10">
                <Link
                  to="/login"
                  className="bg-primary-container text-on-primary-container px-[4rem] py-lg rounded-full font-label-caps text-label-caps hover:scale-105 transition-transform shadow-[0_0_30px_rgba(57,255,20,0.3)]"
                >
                  ACCESS_GRANTED
                </Link>
                <div className="font-terminal-sm text-terminal-sm text-on-surface-variant flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">
                    lock
                  </span>
                  SECURE_CONNECTION_STABLISHED_256BIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
