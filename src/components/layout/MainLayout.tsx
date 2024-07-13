import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
