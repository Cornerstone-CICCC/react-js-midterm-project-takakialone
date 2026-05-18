import { useEffect, useState } from 'react';
import api from '../services/api';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');

      await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts((current) =>
        current.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#111217] p-8 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        Admin Dashboard
      </h1>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex items-center justify-between rounded-xl bg-white/5 p-4"
          >
            <div>
              <h2 className="font-bold">{product.title}</h2>
              <p>${product.price}</p>
            </div>

            <div className="flex gap-3">
              <button className="rounded-lg bg-yellow-500 px-4 py-2 font-bold text-black">
                Edit
              </button>

              <button
                onClick={() => handleDelete(product._id)}
                className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminDashboard;