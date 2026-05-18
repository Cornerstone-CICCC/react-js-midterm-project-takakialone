import { Outlet } from "react-router";
import useAuth from "../features/auth/useAuth";
import ForbiddenPage from "../pages/ForbiddenPage";
import Loading from "../components/Loading";

function SellerOnlyRoute() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated && user?.role === "seller") {
    return <Outlet />;
  } else {
    return <ForbiddenPage />;
  }
}

export default SellerOnlyRoute;
