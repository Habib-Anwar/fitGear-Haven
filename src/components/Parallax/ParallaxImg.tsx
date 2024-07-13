import { Parallax } from "react-parallax";
import paraImg from "../../assets/images/para.png";

export const ParallaxImg = () => {
  return (
    <div
      style={{
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <Parallax
        blur={{ min: -150, max: 150 }}
        bgImage={paraImg}
        bgImageAlt="the body"
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={paraImg}
              alt=""
              style={{
                width: "270px",
                height: "250px",
                marginRight: "350px",
                marginTop: "280px",
              }}
            />
            <p
              style={{
                marginTop: "250px",
                marginLeft: "-280px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "15px",
              }}
            >
              The only bad workout is the one that didn't happen.
              <br />
              Every step, every rep, every drop of sweat
              <br />
              is a step towards a healthier, stronger you.
              <br />
              Remember, consistency is key,
              <br />
              and progress is progress, no matter how small.
            </p>
          </div>
        </div>
        <div style={{ height: "300px" }} />
      </Parallax>
    </div>
  );
};
