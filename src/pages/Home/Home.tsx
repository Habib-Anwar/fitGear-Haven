import { Carusel } from "../../components/Carousel/Carusel";
import { Categories } from "../../components/Categories/Categories";
import { Feature } from "../../components/Feature/Feature";
import Navbar from "../../components/Navbar/Navbar";
import { ParallaxImg } from "../../components/Parallax/ParallaxImg";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carusel></Carusel>
      <Categories></Categories>
      <ParallaxImg></ParallaxImg>
      <Feature></Feature>
    </div>
  );
};
