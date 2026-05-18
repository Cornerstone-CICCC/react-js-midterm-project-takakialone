import { Navigate, Outlet } from "react-router";
import useAuth from "../features/auth/useAuth";

function PublicOnlyRoute() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user?.role === "customer") {
    return <Navigate to="/products" />;
  }

  if (isAuthenticated && user?.role === "seller") {
    return <Navigate to="/seller/dashboard" />;
  }
  return <Outlet />;
}

export default PublicOnlyRoute;
