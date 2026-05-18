import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black px-8 py-5 text-white">
      <Link
        to="/"
        className="text-2xl font-bold"
      >
        Aura Shop
      </Link>

      <div className="flex gap-6">
        <Link to="/products">Products</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/login">Login</Link>

        <Link to="/signup">Signup</Link>

        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;