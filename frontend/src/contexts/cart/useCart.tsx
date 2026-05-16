import { useContext } from "react";
import { CartContext } from "./CartContext";

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("It must be used inside provider");
  }
  return context;
}

export default useCart;
