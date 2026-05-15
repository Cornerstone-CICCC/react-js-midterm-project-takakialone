const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
      <div className="mb-4 h-48 rounded-xl bg-white/10"></div>

      <h2 className="text-xl font-semibold">{product.title}</h2>

      <p className="mt-2 text-sm text-gray-400">
        {product.description}
      </p>

      <p className="mt-4 text-lg font-bold">
        ${product.price}
      </p>

      <button className="mt-4 w-full rounded-xl bg-white px-4 py-2 font-semibold text-black">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;