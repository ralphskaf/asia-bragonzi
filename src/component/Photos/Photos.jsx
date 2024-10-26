import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "../Home/Home.css"
import imgp2 from "../img/img-6.jpg"
import imgp3 from "../img/img-17.jpg"
import imgp4 from "../img/img-16.jpg"
import imgp5 from "../img/img-9.jpg"
import imgp6 from "../img/img-10.jpg"
import imgp7 from "../img/img-12.jpg"
import imgp8 from "../img/img-5.jpg"
import imgp9 from "../img/img-11.jpg"
import imgp10 from "../img/img-13.jpg"
import imgp11 from "../img/img-15.jpg"
import imgp12 from '../img/video-bg-2.jpg'
import video from '../img/video.mp4'
import video2 from '../../assets/Download.mp4'

import { FaPlay ,FaAngleUp} from "react-icons/fa";
import "../Photos/Photos.css"
export default function Photos() {
 // حالة للتحكم في ظهور الفيديو
 
 const scrollToTop = () => {
  window.scrollTo(0, 0);
}
const [isVideoOpen, setIsVideoOpen] = useState(false);
const videoRef = useRef(null); // إنشاء مرجع للفيديو

// دالة لفتح الفيديو
const openVideo = () => {
  setIsVideoOpen(true);
};

// دالة لإغلاق الفيديو
const closeVideo = () => {
  setIsVideoOpen(false);
  if (videoRef.current) {
    videoRef.current.pause(); // إيقاف الفيديو
    videoRef.current.currentTime = 0; // إعادة تعيين الفيديو إلى البداية
  }
};

    


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };   
  return (
    <>
   



    {/*  */}

    <section className="py-5">
  <div className='container'>
    <div className="position-relative">
      <img 
        src={imgp12}
        alt="Click to watch video" 
        className="w-100 rounded shadow"
      />
      <div className="posi">
        <div className="pt" onClick={openVideo}>
          <i 
            className="text-white fs-4 play-icon" 
           
            role="button"
            aria-label="Play video"
          >
            <FaPlay   />
          </i>
        </div>
      </div>
    </div>

    {/* نافذة الفيديو */}
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
        {/* فيديو */}
        <div style={{ position: "relative", width: "100%", height: "80%" }} >
          <video 
            ref={videoRef} // ربط المرجع
            width="100%" 
            height="100%" 
            controls 
            autoPlay
            className="video-player"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* زر إغلاق الفيديو */}
          <button
            onClick={closeVideo}
            className="close-button"
          >
            X
          </button>
        </div>
      </div>
    )}
  </div>
</section>



    {/*  */}
     <div className='py-5 container'>

     <div className="Gallery">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4 ">
                  <span className="font-s40">
                    <span className="relative-span mainColor">Gallery </span>
                  </span>{" "}
                  <span>Photos</span>
                </h2>
              </div>
              <div className="col-md-6">
                <div className="brdr"></div>
              </div>
            </div>
          </div>
<div className="slider-container">
      <Slider {...settings}>
        <div className='px-3'>
        <img src={imgp10}alt="" className='wh '/>
        </div>
        <div>
        <img src={imgp11}alt="" className='wh '/>
        </div>
        <div>
        <img src={imgp3}alt="" className='wh '/>
        </div>
        <div>
        <img src={imgp4}alt="" className='wh '/>
        </div>
        <div>
        <img src={imgp5}alt="" className='wh '/>
        </div>
        <div>
        <img src={imgp6}alt="" className='wh '/>
        </div>
        <div>
        <img src={imgp9}alt="" className='wh  ' />
        </div>
        <div>
        <img src={imgp8}alt="" className='wh '/>
        </div>
      </Slider>
    </div>
    </div>
    <div className="scrollBtn"  onClick={scrollToTop}>
                    <i ><FaAngleUp /> </i>
                </div>
    </>
  )
}
