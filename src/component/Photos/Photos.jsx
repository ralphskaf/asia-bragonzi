import React, { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import imgp2 from "../img/img-6.jpg";
import imgp3 from "../img/img-17.jpg";
import imgp4 from "../img/img-16.jpg";
import imgp5 from "../img/img-9.jpg";
import imgp6 from "../img/img-10.jpg";
import imgp7 from "../img/img-12.jpg";
import imgp8 from "../img/img-5.jpg";
import imgp9 from "../img/img-11.jpg";
import imgp10 from "../img/img-13.jpg";

import imgp12 from "../img/video-image.webp";
import video2 from "../../assets/Download.mp4";
import { useVideo } from "../../Layout/VideoContext";
import { FaPlay, FaAngleUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../Photos/Photos.css";

export default function Photos() {
  const { isVideoOpen, setIsVideoOpen } = useVideo();
  const videoRef = useRef(null);
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const images = [
    imgp2,
    imgp10,
    imgp7,
    imgp3,
    imgp4,
    imgp5,
    imgp6,
    imgp9,
    imgp8,
  ];

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="position-relative">
            <img
              src={imgp12}
              alt="Click to watch video"
              className="img-fluid"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                height: "650px",
                width: "100%",
              }}
            />
            <div className="posi">
              <div className="pt" onClick={openVideo}>
                <i
                  className="text-white fs-4 play-icon"
                  role="button"
                  aria-label="Play video"
                >
                  <FaPlay />
                </i>
              </div>
            </div>
          </div>

          {isVideoOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#0c0c0c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 20,
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "80%" }}
              >
                <video
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  className="video-player"
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button onClick={closeVideo} className="close-button">
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="py-5 container">
        <div className="">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="title py-4">
                <span className="font-s40">
                  <span className="mainColor">{t("gallery")}</span>
                </span>
              </h2>
            </div>
            <div className="col-md-6">
              <div className="brdr"></div>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={50}
            speed={3000}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="wh" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="scrollBtn" onClick={scrollToTop}>
        <i>
          <FaAngleUp />
        </i>
      </div>
    </>
  );
}
