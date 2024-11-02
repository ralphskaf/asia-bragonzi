// src/component/Home/Home.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import img13 from "../img/home-pic.png";
import { Link } from "react-router-dom";
import icon1 from "../img/icon.png";
import icon3 from "../img/icon-1.png";
import icon4 from "../img/icon-2.png";
import icon5 from "../img/icon-3.png";

export default function Home() {
  const { t } = useTranslation();

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
                  <h1 className="text-white my-text-h home-font pb-md-5">
                    <span className="text-theme d-block mainColor">
                      {t("hello")}
                    </span>
                    {t("its_me")}
                  </h1>
                  <Link to="/about" className="custom-button">
                    {t("my_career")}
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
      <div className="information-section mt--103">
        <div className="container">
          <div className="row justify-content-center mb-30-none">
            <div className="col-sm-6 col-xl-3">
              <div className="information-item">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h5 className="title">{t("place_of_birth")}</h5>
                  <span className="info">{t("italia")}</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="information-item">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="icon">
                    <img src={icon4} alt="" />
                  </div>
                  <h5 className="title">{t("date_of_birth")}</h5>
                  <span className="info">{t("dob")}</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="information-item">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon1} alt="" className="" />
                  </div>
                  <div className="icon">
                    <img src={icon1} alt="" className="" />
                  </div>
                  <h5 className="title">{t("weight")}</h5>
                  <span className="info">{t("weight_value")}</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="information-item">
                <div className="info-inner">
                  <div className="right-icon">
                    <img src={icon5} alt="" />
                  </div>
                  <div className="icon">
                    <img src={icon5} alt="" />
                  </div>
                  <h5 className="title">{t("height")}</h5>
                  <span className="info">{t("height_value")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
