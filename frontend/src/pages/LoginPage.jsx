const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111217] text-white">
      <form className="w-full max-w-md rounded-2xl bg-white/5 p-8">
        <h1 className="mb-6 text-4xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-xl p-3 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded-xl p-3 text-black"
        />

        <button
          className="w-full rounded-xl bg-white px-4 py-3 font-bold text-black"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default LoginPage;