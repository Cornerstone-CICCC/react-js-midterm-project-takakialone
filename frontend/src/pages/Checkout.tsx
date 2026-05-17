function Checkout() {
  return (
    <main className="pt-32 pb-20 px-margin-desktop min-h-screen">
      <div className="max-w-350 mx-auto grid grid-cols-12 gap-gutter items-start">
        <div className="col-span-8 flex flex-col gap-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-primary-container rounded-full animate-pulse"></div>
            <h1 className="font-display-lg text-headline-md uppercase tracking-widest text-primary">
              SECURE_CHECKOUT_PROTOCOL
            </h1>
            <div className="grow h-px bg-primary/20"></div>
            <span className="font-terminal-sm text-on-surface-variant">
              SESSION: 0x82F1_BETA
            </span>
          </div>
          <section className="glass-panel p-lg rounded-lg border-l-4 border-l-primary-container/50">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-label-caps text-label-caps text-primary uppercase mb-1">
                  Step 01
                </h2>
                <h3 className="font-headline-md text-headline-md">
                  BATCH_PROTOCOL
                </h3>
              </div>
              <span className="font-terminal-sm text-on-surface-variant">
                2 ITEMS ENCRYPTED
              </span>
            </div>
            <div className="flex flex-col gap-base">
              <div className="flex gap-md p-md bg-white/5 rounded hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-primary-container">
                <div className="w-24 h-24 bg-surface-container rounded overflow-hidden shrink-0">
                  <img
                    alt="Night Capsule"
                    className="w-full h-full object-cover"
                    data-alt="A futuristic, sleek matte black liquid container with glowing emerald green structural lines and digital readouts on its surface. The object is set against a dark, foggy warehouse environment with purple atmospheric lighting and cinematic depth of field."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnONEPgm129nKuM3RojQmkrkJUp3b-pk8-NPOf9-vr0bIGJ-Lu98TUnBc2FuC4X9OVPN86E2dKpWwaNNPvgGmnMYNVx7hmaz2R5a5yyfmMhzB8zJ7tEH2mPgSskNQVX_ZI4JgzpzwUy1yjD33-CRy6D3Ad12KnkknFdOMysHFRc22HS2252ca9TNv_ZKgi-Np-wLxti-qA99l24iWrd-VCGdwmOAtqPg4LDjIkFtMGh_wDMQJpcHjcy8HuxcPITAjYLDH6Cb4xLOw"
                  />
                </div>
                <div className="grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-headline-md text-body-md font-bold uppercase">
                        Night Capsule
                      </h4>
                      <span className="font-price-tag text-secondary">
                        0.45 ETH
                      </span>
                    </div>
                    <p className="font-terminal-sm text-label-caps text-on-surface-variant">
                      SKU: NC-099-VOID
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-on-surface-variant">
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="font-terminal-sm text-primary">01</span>
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                    <button className="font-terminal-sm text-error/60 hover:text-error transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        delete
                      </span>
                      PURGE
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-md p-md bg-white/5 rounded hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-primary-container">
                <div className="w-24 h-24 bg-surface-container rounded overflow-hidden shrink-0">
                  <img
                    alt="Shadow Bottle"
                    className="w-full h-full object-cover"
                    data-alt="A minimalist high-tech glass bottle with a dark iridescent finish, reflecting neon violet and toxic green lights. The bottle features an integrated digital status screen displaying cryptic code. It is positioned on a reflective metallic surface in a dark cyberpunk setting."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh69hjikOGGOfP9MaAP7XQuybJgB3IZ-A4yes1sen35pUgRxrGrCiWyLT_Ll0mdwPwUwnHLckb7FHgRMqzOU0kI94Mf0kh5nq-NNhQroD7qHJsAX6dfpnCwPuizLipJkDgezYZc7spQKzhNX865QSeAjOCq4b3CvZRE2MBomxPK0ewFh2P3py-mD6iXUAZhpREJ00AaC-YDgqSy5ls5e4wGArIigLva22pdGyaTrTDxP79pFHM8DSadlEGxNjJvwN0mneQC5loqF0"
                  />
                </div>
                <div className="grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-headline-md text-body-md font-bold uppercase">
                        Shadow Bottle
                      </h4>
                      <span className="font-price-tag text-secondary">
                        1,200 CR
                      </span>
                    </div>
                    <p className="font-terminal-sm text-label-caps text-on-surface-variant">
                      SKU: SB-881-GHOST
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-on-surface-variant">
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="font-terminal-sm text-primary">01</span>
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                    <button className="font-terminal-sm text-error/60 hover:text-error transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        delete
                      </span>
                      PURGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="glass-panel p-lg rounded-lg border-l-4 border-l-tertiary-container/50">
            <div className="mb-8">
              <h2 className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase mb-1">
                Step 02
              </h2>
              <h3 className="font-headline-md text-headline-md">
                SHIPPING_PROTOCOL
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-gutter">
              <div className="space-y-md">
                <label className="font-terminal-sm text-on-surface-variant uppercase block">
                  Drop Location
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest/30 border-b-2 border-outline/30 focus:border-primary px-4 py-3 font-terminal-sm terminal-cursor outline-none transition-all placeholder:text-on-surface-variant/30"
                    placeholder="ENTER_COORDINATES"
                    type="text"
                  />
                </div>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary-fixed font-label-caps px-2 py-1 rounded text-[10px]">
                    VERIFIED_NODE
                  </span>
                  <span className="bg-white/5 text-on-surface-variant font-label-caps px-2 py-1 rounded text-[10px]">
                    ENCRYPTED_ENDPOINT
                  </span>
                </div>
              </div>
              <div className="space-y-md">
                <label className="font-terminal-sm text-on-surface-variant uppercase block">
                  Transit Method
                </label>
                <div className="flex flex-col gap-sm">
                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5 cursor-pointer hover:border-primary/40 transition-all">
                    <input
                      className="accent-primary-container"
                      name="transit"
                      type="radio"
                    />
                    <span className="font-terminal-sm grow">
                      Anonymous Courier
                    </span>
                    <span className="font-price-tag text-xs text-primary">
                      +0.002 ETH
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5 cursor-pointer hover:border-primary/40 transition-all">
                    <input
                      className="accent-primary-container"
                      name="transit"
                      type="radio"
                    />
                    <span className="font-terminal-sm grow">
                      Drone Drop (Stealth)
                    </span>
                    <span className="font-price-tag text-xs text-primary">
                      +0.015 ETH
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <section className="glass-panel p-lg rounded-lg border-l-4 border-l-secondary/50">
            <div className="mb-8">
              <h2 className="font-label-caps text-label-caps text-secondary uppercase mb-1">
                Step 03
              </h2>
              <h3 className="font-headline-md text-headline-md">
                PAYMENT_GATEWAY
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-gutter">
              <div className="p-md bg-surface-container-highest/40 rounded border border-secondary/20 flex flex-col justify-between min-h-40">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-secondary">
                    ACTIVE_WALLET
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    account_balance_wallet
                  </span>
                </div>
                <div className="font-terminal-sm">
                  <p className="text-on-surface-variant mb-1">0x71C...82F1</p>
                  <p className="text-headline-md font-bold text-on-surface">
                    1.284 ETH
                  </p>
                </div>
                <button className="w-full mt-2 py-2 border border-secondary/40 text-secondary font-terminal-sm hover:bg-secondary hover:text-on-secondary transition-all">
                  DISCONNECT
                </button>
              </div>
              <div className="p-md bg-surface-container-highest/40 rounded border border-white/10 flex flex-col justify-between min-h-40">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-on-surface-variant">
                    NODE_CREDITS
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant">
                    generating_tokens
                  </span>
                </div>
                <div className="font-terminal-sm">
                  <p className="text-on-surface-variant mb-1">BALANCE</p>
                  <p className="text-headline-md font-bold text-on-surface">
                    4,500 CR
                  </p>
                </div>
                <button className="w-full mt-2 py-2 bg-white/5 text-on-surface font-terminal-sm hover:bg-white/10 transition-all">
                  REFILL_CREDITS
                </button>
              </div>
            </div>
          </section>
        </div>
        <aside className="col-span-4 sticky top-32 flex flex-col gap-gutter">
          <div className="glass-panel p-lg rounded-lg neon-border-primary">
            <h3 className="font-headline-md text-headline-md uppercase mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                analytics
              </span>
              SUMMARY
            </h3>
            <div className="space-y-4 font-terminal-sm text-on-surface-variant border-b border-white/10 pb-6">
              <div className="flex justify-between">
                <span>SUBTOTAL_VAL</span>
                <span className="text-on-surface">0.45 ETH + 1,200 CR</span>
              </div>
              <div className="flex justify-between">
                <span>GAS_FEE_EST</span>
                <span className="text-on-surface">0.004 ETH</span>
              </div>
              <div className="flex justify-between">
                <span>SECURE_TUNNEL_FEE</span>
                <span className="text-on-surface">15.00 CR</span>
              </div>
            </div>
            <div className="pt-6 pb-8">
              <div className="flex justify-between items-end">
                <span className="font-label-caps text-primary">
                  TOTAL_PROTOCOL_COST
                </span>
              </div>
              <div className="mt-2 text-right">
                <p className="font-price-tag text-3xl text-primary neon-glow-text">
                  0.454 ETH
                </p>
                <p className="font-price-tag text-lg text-secondary">
                  +1,215 CR
                </p>
              </div>
            </div>
            <div className="space-y-md">
              <div className="flex items-center gap-2 p-3 bg-primary-container/5 border border-primary-container/20 rounded text-[10px] font-terminal-sm text-primary-container">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
                END_TO_END ENCRYPTION ENABLED FOR THIS TRANSACTION
              </div>
              <button className="w-full bg-primary-container text-on-primary-container py-4 font-display-lg text-headline-md tracking-[0.2em] shadow-[0_0_25px_rgba(57,255,20,0.4)] hover:brightness-110 active:scale-95 transition-all uppercase">
                SUBMIT_ORDER
              </button>
              <p className="text-center font-terminal-sm text-on-surface-variant/40 text-[10px] uppercase">
                By confirming, you agree to the Ghost_Protocol terms.
              </p>
            </div>
          </div>
          <div className="glass-panel p-md rounded-lg bg-surface-container-lowest/80 border-t-2 border-primary/40">
            <div className="flex flex-col gap-2 font-terminal-sm text-[11px] text-primary/70">
              <div className="flex justify-between">
                <span>NETWORK_LATENCY:</span>
                <span className="text-primary">14ms</span>
              </div>
              <div className="flex justify-between">
                <span>ENCRYPTION_STRENGTH:</span>
                <span className="text-primary">AES-256-GCM</span>
              </div>
              <div className="flex justify-between">
                <span>NODE_STATUS:</span>
                <span className="text-primary animate-pulse">OPTIMIZED</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
