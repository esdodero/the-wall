import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
