import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Feature.css";
import { TButton } from "../TButton/TButton";

export const Feature = () => {
  return (
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
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt="Nature 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          alt="Nature 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          alt="Nature 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ position: "relative" }}>
          <img
            src="https://i.ibb.co/KKBbyL0/download-1.jpg"
            alt="Nature 8"
            style={{ width: "100%", height: "390px", display: "block" }}
          />
          <TButton
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
      {/* <SwiperSlide>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMSExMWFhUXGBYVGRUYFxUYFRcWFRUXFxgVFRkaHiggGholGxYYITIhJSktLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFysdFR0tKy0rLS0tLSstKy0rLS0tLS0rLSstKysrLS0tLSs3LS0tLS0tLSstLS03LS03LS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcBAgj/xABBEAACAQIDBAYHBwIFBAMAAAABAgADEQQSIQUxQVEGBxMiYXEyUoGRobHwFCNCgsHR4WJyM0OSosIWU7LSJDRj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAERMRIhAv/aAAwDAQACEQMRAD8A7jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARErnSvpXTwgyCz1iLhOCj1n5Dw3n4wLHPCZxat0uxBcv2zgnkxAHgANLTH/1LVLZmquTx77Ef6SSB7pfI7X2q8x7xNFR6a4BmK/aFUg2OcOnxYAShjpkijNULAeGsibb6wcEFysgxNxcAqCuvMsDb3S4Ow4bFJUGam6uOasGHvEzT8xYvpdRLZ6WCFE8Gp16isPLeo902WzesnG00zrVe17BKpFYNbf3iA1h4WkwfouJzbof1sUcQy0sUooVGsBUB+5YngSdaZ87jx4TpMgREQEREBERAREQEREBERAREQEREBERAREQNF0y6RLgsOamhqN3aani1t5/pG8+wcROD4zaL1HZ3Ys7G7Md5M2XWP0j+1YyplP3dImlT5WU95/zMDryCyqCtNyI2Pbw2LCgsToOP1x8JrxVmt2hisxyj0R8TxP6eUo9x+OaoddBwH6nmZE043t4G0+SYkH2LeqPifnPs1CbX4CwG4AeExXi8DOrztfU301apbAV2uwF6Dk6sqi7UjzKgXH9II/DrxAGT9kYypSrUqtH/ABEdXTxZTex8Dax8LyD9cRKBiOspc47OiSnEs1mJ42sCLD4+E8xHT4ubUwKY/q1b3+iJMqugTEcSmfs8657XyZhmtztv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"
          alt="Nature 5"
        />
      </SwiperSlide> */}

      <SwiperSlide>
        <div style={{ position: "relative" }}>
          <img
            src="https://i.ibb.co/y6VHwQF/download-2.jpg"
            alt="Nature 8"
            style={{ width: "100%", height: "390px", display: "block" }}
          />
          <TButton
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
      {/* <SwiperSlide>
        <div style={{ position: "relative" }}>
          <img
            src="https://i.ibb.co/HN6K9px/download-1.jpg"
            alt="Nature 8"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <TButton
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
          >
            Button
          </TButton>
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div style={{ position: "relative" }}>
          <img
            src="https://i.ibb.co/W350VJp/arctrainer.jpg"
            alt="Nature 8"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <TButton
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
          >
            Button
          </TButton>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
