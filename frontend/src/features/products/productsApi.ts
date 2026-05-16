import type { Product } from "../../types/products.type";

type ProductResponse = Omit<Product, "id"> & { _id: string };

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";
const BASE_URL = `${API_URL.replace(/\/$/, "")}/api/products`;

function normalizeProduct(product: ProductResponse): Product {
  return {
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    imgUrl: product.imgUrl,
  };
}

async function getAllProducts() {
  const res = await fetch(`${BASE_URL}`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.data.products.map(normalizeProduct);
}

async function getProductById(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json();
  return normalizeProduct(data.data.product);
}

export { getAllProducts, getProductById };
