import { useState } from "react";
import { type CartType } from "../../types/cart.type";
import { CartContext } from "./CartContext";

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartType[]>([]);

  function addToCart(input: CartType) {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.productId === input.productId,
      );

      // If the input is new, add to the array
      if (!existingItem) {
        return [...prev, input];
      }

      // if existing, increment the number
      return prev.map((item) =>
        item.productId === input.productId
          ? { ...item, quantity: item.quantity + input.quantity }
          : item,
      );
    });
  }

  function removeItemFromCart(id: string) {
    setCart((prev) => prev.filter((item) => item.productId !== id));
  }

  function incrementQuantity(id: string) {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrementQuantity(id: string) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function setQuantity(id: string, quantity: number) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === id
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function clearCart() {
    setCart([]);
  }

  const value = {
    cart,
    addToCart,
    removeItemFromCart,
    incrementQuantity,
    decrementQuantity,
    setQuantity,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
