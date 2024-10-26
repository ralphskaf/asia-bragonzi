import React from "react";
import img13 from "../img/img-4.png";
import { Link } from "react-router-dom";
import icon1 from "../img/icon.png";
import icon3 from "../img/icon-1.png";
import icon4 from "../img/icon-2.png";
import icon5 from "../img/icon-3.png";
import { FaAngleUp } from "react-icons/fa";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="pt-5 z-2">
        <div className="pt-5">
          <div className="container-fluid">
            <div className="row pt-md-0 pt-5">
              <div
                className="pt-5 pt-md-0 col-md-6 col-12 d-md-flex text-center text-md-start align-items-center home-text"
                data-aos="fade-right"
              >
                <div className="px-5 pb-md-5 pb-0">
                  <h1 className="text-white my-text-h font pb-md-5">
                    <span className="text-theme d-block mainColor">I am</span>
                    Asia Bragonzi
                  </h1>
                  <Link to="/about" className="custom-button">
                    My Career
                  </Link>
                </div>
              </div>

              <div
                className="col-md-6 col-12 pb-5 pb-md-0 home-image pt-4 pt-md-0"
                data-aos="fade-up"
              >
                <div
                  className="imga"
                  data-wow-delay=".5s"
                  data-wow-duration="1s"
                >
                  <img
                    src={img13}
                    alt="Illustration"
                    className="w-100 h-100"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information-section mt--103 ">
        <div className="container">
          <div className="row justify-content-center mb-30-none ">
            <div className="col-sm-6 col-xl-3">
              <div className="information-item ">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h5 className="title">Place of Birth</h5>
                  <span className="info"> Italia</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="information-item ">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="icon">
                    <img src={icon4} alt="" />
                  </div>
                  <h5 className="title">Date of Birth</h5>
                  <span className="info">5 March 2001</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="information-item ">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon1} alt="" className="" />
                  </div>
                  <div className="icon">
                    <img src={icon1} alt="" className="" />
                  </div>
                  <h5 className="title">Weight</h5>
                  <span className="info">63kg / 139lb</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="information-item ">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon5} alt="" />
                  </div>
                  <div className="icon">
                    <img src={icon5} alt="" />
                  </div>
                  <h5 className="title">Height</h5>
                  <span className="info">171cm / 5'7"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
