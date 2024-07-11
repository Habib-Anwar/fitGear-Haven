import { Benefit } from "../../components/Benefit/Benefit";
import { Carusel } from "../../components/Carousel/Carusel";
import { Categories } from "../../components/Categories/Categories";
import { Feature } from "../../components/Feature/Feature";
import { Footer } from "../../components/Footer/Footer";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
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
      <Benefit></Benefit>
      <ImageGallery></ImageGallery>
      <Footer></Footer>
    </div>
  );
};
