import { Parallax } from "react-parallax";
import paraImg from "../../assets/images/para.png";

export const ParallaxImg = () => {
  return (
    <Parallax
      blur={{ min: -150, max: 150 }}
      bgImage={paraImg}
      bgImageAlt="the dog"
      strength={-300}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginTop: "200px" }}>
          The only bad workout is
          <br />
          the one that didn't happen.
        </h1>
      </div>
      <div style={{ height: "100px" }} />
    </Parallax>
  );
};
