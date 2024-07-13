import { Benefit } from "../../components/Benefit/Benefit";
import { Carusel } from "../../components/Carousel/Carusel";
import { Categories } from "../../components/Categories/Categories";
import { Feature } from "../../components/Feature/Feature";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import { ParallaxImg } from "../../components/Parallax/ParallaxImg";

export const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      <Categories></Categories>
      <ParallaxImg></ParallaxImg>
      <Feature></Feature>
      <Benefit></Benefit>
      <ImageGallery></ImageGallery>
    </div>
  );
};
