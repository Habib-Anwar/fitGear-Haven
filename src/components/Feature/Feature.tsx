import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Feature.css";
import { TButton } from "../TButton/TButton";
import { Image } from "antd";
import { Link } from "react-router-dom";

export const Feature = () => {
  return (
    <>
      <Swiper
        style={{ marginBottom: "100px" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://m.media-amazon.com/images/I/61HR+TcgMLL._AC_UF1000,1000_QL80_.jpg"
              alt="Nature 8"
              style={{ width: "100%", height: "390px", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Button
            </TButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://cdn.shopify.com/s/files/1/0574/1215/7598/t/16/assets/acf.RowERG_Standard_FlyFrontAngle-(1).png?v=1640040616"
              alt="Nature 8"
              style={{ width: "100%", height: "390px", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Button
            </TButton>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://komodosports.co.uk/media/catalog/product/cache/dda75b2efb715bcfe6c6796316060562/r/e/resistance-bands-full-set-rst-bnd-set-5-1.jpg"
              alt="Nature 8"
              style={{ width: "100%", height: "390px", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></TButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://i.ibb.co/KKBbyL0/download-1.jpg"
              alt="Nature 8"
              style={{ width: "100%", height: "390px", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></TButton>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://5.imimg.com/data5/SELLER/Default/2023/6/319324509/EX/IZ/CI/2951851/rubber-yoga-mat.jpg"
              alt="Nature 8"
              style={{ width: "100%", height: "390px", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></TButton>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://i.ibb.co/y6VHwQF/download-2.jpg"
              alt="Nature 8"
              style={{ width: "100%", height: "390px", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></TButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/rockcms/2024-01/AMAZON-b8d48f.jpg"
              alt="Nature 8"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 18,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></TButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: "relative" }}>
            <Image
              src="https://i.ibb.co/W350VJp/arctrainer.jpg"
              alt="Nature 8"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <TButton
              buttonName="Product Details"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.8)",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></TButton>
          </div>
        </SwiperSlide>
      </Swiper>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">
          <TButton
            buttonName="Explore More"
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          ></TButton>
        </Link>
      </div>
    </>
  );
};
