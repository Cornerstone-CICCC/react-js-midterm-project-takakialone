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
import PublicOnlyRoute from "./layouts/PublicOnlyRoute";
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerProductEditPage from "./pages/seller/SellerProductEditPage";
import SellerProductCreatePage from "./pages/seller/SellerProductCreatePage";
import SellerProductsDelete from "./pages/seller/SellerProductsDelete";
import SellerOnlyRoute from "./layouts/SellerOnlyRoute";

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
      <Route element={<SellerOnlyRoute />}>
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route
          path="/seller/products/edit/:id"
          element={<SellerProductEditPage />}
        />
        <Route
          path="/seller/products/create"
          element={<SellerProductCreatePage />}
        />
        <Route
          path="/seller/products/delete/:id"
          element={<SellerProductsDelete />}
        />
      </Route>
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}

export default App;
