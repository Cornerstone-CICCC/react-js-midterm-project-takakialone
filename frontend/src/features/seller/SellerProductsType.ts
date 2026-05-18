export type CreateType = {
  name: string;
  description: string;
  price: number;
  imgUrl?: string;
  stock: number;
};

export type EditType = {
  name?: string;
  description?: string;
  price?: number;
  imgUrl?: string;
  stock?: number;
};
