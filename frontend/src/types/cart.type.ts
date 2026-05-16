export type CartType = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
};

export type CartContextType = {
  cart: CartType[];
  addToCart: (input: CartType) => void;
  removeItemFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};
