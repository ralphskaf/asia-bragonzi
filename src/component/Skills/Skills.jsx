import React from "react";
import "../Skills/Skills.css";
import { FaAngleUp } from "react-icons/fa";
import award from "../img/award.png";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="container">
        <div className="skills">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="title py-4 ">
                <span className="font-s40">
                  <span className="mainColor">{t("skills")}</span>
                </span>{" "}
              </h2>
            </div>
            <div className="col-md-6">
              <div className="brdr"></div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="skill ">
          <h5 className="pt-3">{t("pace")}</h5>
          <div className="progress-container">
            <span className="progress-label">69%</span>{" "}
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "69%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="skill mt-3">
          <h5>{t("shooting")}</h5>
          <div className="progress-container">
            <span className="progress-label">60%</span>
            <div className="progress">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="skill mt-3">
          <h5>{t("passing")}</h5>
          <div className="progress-container">
            <span className="progress-label">67%</span>
            <div className="progress">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "67%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="skill">
          <h5>{t("dribbling")}</h5>
          <div className="progress-container">
            <span className="progress-label">66%</span>{" "}
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "66%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="skill mt-3">
          <h5>{t("defending")}</h5>
          <div className="progress-container">
            <span className="progress-label">30%</span>
            <div className="progress">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "30%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="skill mt-3">
          <h5>{t("physicality")}</h5>
          <div className="progress-container">
            <span className="progress-label">62%</span>
            <div className="progress">
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "62%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="award-section py-5 ">
        <div className="container">
          <div className="Gallery">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4 ">
                  <span className="font-s40">
                    <span className="mainColor">{t("award")}</span>
                  </span>
                </h2>
              </div>
              <div className="col-md-6">
                <div className="brdr"></div>
              </div>
            </div>
          </div>
          <div className="mb-30-none">
            <div
              className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block"
              data-aos="fade-right"
            >
              <div className="award-thumb">
                <div className="thumb">
                  <img src={award} alt="award" className="award-icon" />
                </div>
                <div className="cont">
                  <span>x</span>02
                </div>
              </div>
              <div className="award-content">
                <h4 className="title">{t("award_1_title")}</h4>
                <p>{t("award_1_text")}</p>
              </div>
            </div>
            <div
              className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block"
              data-aos="fade-up"
            >
              <div className="award-thumb">
                <div className="thumb">
                  <img src={award} alt="award" className="award-icon" />
                </div>
                <div className="cont"></div>
              </div>
              <div className="award-content">
                <h4 className="title">{t("award_2_title")}</h4>
                <p>{t("award_2_text")}</p>
              </div>
            </div>
            <div
              className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block"
              data-aos="fade-up"
            >
              <div className="award-thumb px-lg-5">
                <div className="thumb">
                  <img src={award} alt="award" className="award-icon" />
                </div>
                <div className="cont">
                  <span>x</span>2
                </div>
              </div>
              <div className="award-content">
                <h4 className="title">{t("award_3_title")}</h4>
                <p>{t("award_3_text")}</p>
              </div>
            </div>
            <div
              className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block"
              data-aos="fade-up"
            >
              <div className="award-thumb px-lg-5">
                <div className="thumb">
                  <img src={award} alt="award" className="award-icon" />
                </div>
                <div className="cont"></div>
              </div>
              <div className="award-content">
                <h4 className="title">{t("award_4_title")}</h4>
                <p>{t("award_4_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="scrollBtn" onClick={scrollToTop}>
        <i>
          <FaAngleUp />{" "}
        </i>
      </div>
    </>
  );
}
