import { Outlet } from "react-router";
import HomeHeader from "../components/HomeHeader";

function MainLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}

export default MainLayout;
