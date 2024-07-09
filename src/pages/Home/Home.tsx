import { Carusel } from "../../components/Carousel/Carusel";
import { Categories } from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carusel></Carusel>
      <Categories></Categories>
    </div>
  );
};
