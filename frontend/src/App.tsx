import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./layouts/ProtectedRoute";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import ProductsLists from "./pages/Products";
import Checkout from "./pages/Checkout";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsLists />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
