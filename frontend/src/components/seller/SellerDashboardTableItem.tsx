import type { SellerProduct } from "../../types/sellerProducts.type";

type Props = { product: SellerProduct; category: string };

function SellerDashboardTableItem({ product, category }: Props) {
  const { id, name, description, price, imgUrl, stock, sellerId, isActive } =
    product;
  return (
    <div className="flex hover:bg-surface-variant/20 transition-colors border-b border-outline-variant/10">
      <div className="flex-2 p-md">
        <div className="flex items-center gap-sm">
          <div className="w-10 h-10 rounded-sm bg-surface-container-highest flex items-center justify-center border border-outline-variant">
            <img
              src={imgUrl}
              alt=""
              className="material-symbols-outlined text-secondary"
            />
          </div>
          <span className="font-bold">{name}</span>
        </div>
      </div>
      <div className="flex-1 p-md">
        <span className="px-xs py-0.5 bg-secondary-container/10 text-secondary text-[10px] rounded border border-secondary/20 uppercase font-bold">
          {category}
        </span>
      </div>
      <div className="flex-1 p-md font-code-sm">{price}</div>
      <div className="flex-1 p-md">
        <div className="flex items-center gap-xs text-primary-fixed-dim">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
          {stock} Units
        </div>
      </div>
      <div className="flex-1 p-md text-right">
        <div className="flex justify-end gap-sm">
          <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button className="text-on-surface-variant hover:text-error transition-colors">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboardTableItem;
