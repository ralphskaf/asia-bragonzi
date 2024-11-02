import React from "react";
import "../Achievement/style.css";
import imgp4 from "../img/img-8.jpg";
import { useTranslation } from "react-i18next";

export default function Achievement() {
  const { t } = useTranslation();

  return (
    <>
      <section className="">
        <div className="container">
          <div className="">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4 ">
                  <span className="font-s40">
                    <span className="mainColor">{t("achievement")}</span>
                  </span>
                </h2>
              </div>
              <div className="col-md-6">
                <div className="brdr"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="flip-left">
              <div className="position-relative py-3">
                <img
                  src={imgp4}
                  alt=""
                  className="img-fluid"
                  style={{ maxHeight: "600px", borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="content">
                <p>{t("achievement_text_1")}</p>
                <p>{t("achievement_text_2")}</p>
              </div>
              <div className="counter-wrapper d-flex flex-wrap mb-1 mb-md-3">
                <div className="counter-item">
                  <div className="counter-header">
                    <h2 className="title odometer fs-2">34</h2>
                  </div>
                  <h4 className="subtitle">{t("matches")}</h4>
                </div>
                <div className="counter-item">
                  <div className="counter-header">
                    <h2 className="title odometer fs-2">2</h2>
                  </div>
                  <h4 className="subtitle">{t("goals")}</h4>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
