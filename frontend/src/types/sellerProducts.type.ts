export type SellerProductResponse = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imgUrl?: string;
  stock: number;
  sellerId: string;
  isActive: boolean;
};

export type SellerProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl?: string;
  stock: number;
  sellerId: string;
  isActive: boolean;
};
