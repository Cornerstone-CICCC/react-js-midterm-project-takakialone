import { Link } from "react-router";
import CartItemComponent from "../components/CartItemComponent";
import useCart from "../contexts/cart/useCart";

function CartPage() {
  const { cart } = useCart();
  console.log(`CartPage: ${cart}`); // returns empty
  const total = cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);
  return (
    <main className="max-w-container-max mx-auto px-margin py-xl">
      <header className="mb-lg">
        <div className="flex items-center gap-sm text-primary-fixed-dim mb-xs">
          {/* <span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">lock</span> */}
          <span className="font-label-mono text-label-mono uppercase tracking-widest">
            Secure Session Established
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-primary uppercase">
          ENCRYPTED CART
        </h1>
        <div className="scanning-loader mt-sm"></div>
      </header>
      <div className="grid grid-cols-12 gap-gutter items-start">
        <div className="col-span-12 lg:col-span-8 space-y-md">
          {cart.map((item) => (
            <CartItemComponent key={item.productId} item={{ item: item }} />
          ))}
          <div className="border border-dashed border-outline-variant/50 p-lg text-center rounded-sm">
            <p className="font-label-mono text-on-surface-variant text-sm">
              ENCRYPTION KEY DETECTED... READY FOR ADDITIONAL BYTES.
            </p>
          </div>
        </div>
        <aside className="col-span-12 lg:col-span-4 sticky top-32">
          <div className="glass-card p-md border-primary-container/20 shadow-[0_0_30px_rgba(42,229,0,0.05)]">
            <h2 className="font-headline-md text-headline-md text-primary-fixed-dim border-b border-outline-variant/30 pb-sm mb-md flex items-center justify-between">
              ORDER MANIFEST
              <span className="material-symbols-outlined text-sm">
                terminal
              </span>
            </h2>
            <div className="space-y-sm font-label-mono text-sm">
              <div className="text-right text-on-surface-variant text-2xl">
                ${total.toFixed(2)}CAD
              </div>
            </div>
            <div className="mt-md space-y-sm">
              <Link
                to="/checkout"
                className="w-full py-md bg-primary-container text-on-primary font-headline-md text-headline-md uppercase tracking-tighter hover:bg-primary-fixed-dim transition-all active:scale-95 duration-200 neon-glow-primary"
              >
                PROCEED TO FAKE CHECKOUT
              </Link>
            </div>
            <div className="mt-lg p-sm bg-surface-container-lowest border border-error-container/40 rounded-sm">
              <div className="flex items-center gap-xs text-error mb-xs">
                <span className="material-symbols-outlined text-sm">
                  warning
                </span>
                <span className="font-label-mono text-[10px] font-bold">
                  SECURITY ADVISORY
                </span>
              </div>
              <p className="font-code-sm text-code-sm text-on-surface-variant leading-tight">
                ONION ROUTING ACTIVE. PACKETS WILL BE FRAGMENTED ACROSS 7 NODES.
                EXPECT LATENCY IN VOID-SPACE DELIVERY.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CartPage;
