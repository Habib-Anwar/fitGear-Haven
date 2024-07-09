import { Carousel } from "antd";
import ban3 from "../../assets/images/img3.jpg";
export const Carusel = () => {
  const contentStyle: React.CSSProperties = {
    height: "460px",
    width: "1560px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay>
      <div>
        <img
          style={contentStyle}
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victorfreitas-841130.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://images.pexels.com/photos/4164841/pexels-photo-4164841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://images.pexels.com/photos/4162595/pexels-photo-4162595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://i.ibb.co/jWnSqxQ/istockphoto-2014752145-2048x2048.jpg"
          alt=""
        />
      </div>
    </Carousel>
  );
};
