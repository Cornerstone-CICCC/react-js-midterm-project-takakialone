import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post('/auth/login', formData);

    console.log(response.data);

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    if (response.data.user.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/products');
    }
  } catch (error) {
    console.error(error);
    alert('Login failed');
  }
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111217] text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white/5 p-8"
      >
        <h1 className="mb-6 text-4xl font-bold">
          Login
        </h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-full rounded-xl p-3 text-black"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 w-full rounded-xl p-3 text-black"
        />

        <button className="w-full rounded-xl bg-white px-4 py-3 font-bold text-black">
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginPage;