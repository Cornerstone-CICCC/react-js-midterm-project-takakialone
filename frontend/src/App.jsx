import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboard from './pages/AdminDashboard';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
  path="/cart"
  element={<CartPage />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;