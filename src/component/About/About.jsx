import React from "react";
import "../About/About.css";
import { FaAngleUp } from "react-icons/fa";
import first_icon from "../../assets/biography.png";
import third_icon from "../../assets/club.png";
import imgp3 from "../img/img-7.jpg";
import History from "./../History/History";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="about-section padding-top oh padding-bottom px-md-5">
        <div className="container-fluid py-5 px-1">
          <div className="">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4">
                  <span className="font-s40">
                    <span className="mainColor">{t("about_asia")}</span>
                  </span>
                </h2>
              </div>
              <div className="col-md-8">
                <div className="brdr"></div>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="content-text px-3">
                  <p>{t("biography_text")}</p>
                </div>
                <div className="about-icons">
                  {/* first icon */}
                  <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    <div className="content-text px-2">
                      <h6>
                        <img
                          src={first_icon}
                          alt=""
                          className="me-3"
                          style={{ width: "64px", height: "64px" }}
                        />
                        {t("biography")}
                      </h6>
                      <h6 className="my-text-Sans">{t("biography_details")}</h6>
                    </div>
                  </div>

                  {/* third icon */}
                  <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    <div className="content-text px-3">
                      <h6>
                        {" "}
                        <img
                          src={third_icon}
                          style={{ width: "64px", height: "64px" }}
                          alt=""
                          className="me-3"
                        />
                        {t("clubs")}
                      </h6>
                      <ul className="my-text-Sans px-3">
                        {t("clubs_list", { returnObjects: true }).map(
                          (club, index) => (
                            <li key={index}>{club}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 text-center">
                <div className="about-image" data-aos="fade-up">
                  <div className="position-relative">
                    <div className="">
                      <img
                        src={imgp3}
                        alt=""
                        className="img-fluid"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <History />
      </section>

      <div className="scrollBtn" onClick={scrollToTop}>
        <FaAngleUp className="fa-angle-up" />
      </div>
    </>
  );
}
