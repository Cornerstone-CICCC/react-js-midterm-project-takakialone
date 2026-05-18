import type {
  SellerProduct,
  SellerProductResponse,
} from "../../types/sellerProducts.type";
import type { CreateType, EditType } from "./SellerProductsType";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";
const BASE_URL = `${API_URL.replace(/\/$/, "")}/api/seller/products`;

function normalizeProduct(input: SellerProductResponse): SellerProduct {
  return {
    id: input._id,
    name: input.name,
    description: input.description,
    price: input.price,
    imgUrl: input.imgUrl,
    stock: input.stock,
    isActive: input.isActive,
    sellerId: input.sellerId,
  };
}

async function getAllSellerProducts() {
  const res = await fetch(BASE_URL, { method: "GET", credentials: "include" });
  if (!res.ok) {
    throw new Error("Failed to fetch seller's products");
  }

  const data = await res.json();
  return data.data.products.map((p: SellerProductResponse) =>
    normalizeProduct(p),
  );
}

async function createSellerProduct(input: CreateType) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to create seller's product");
  }

  const data = await res.json();
  return normalizeProduct(data.data.product);
}

async function editSellerProduct(id: string, input: EditType) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to edit seller's product");
  }

  const data = await res.json();

  return normalizeProduct(data.data.product);
}

async function deleteSellerProduct(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to delete seller's product");
  }

  const data = await res.json();

  return normalizeProduct(data.data.product);
}

export {
  getAllSellerProducts,
  createSellerProduct,
  editSellerProduct,
  deleteSellerProduct,
};
