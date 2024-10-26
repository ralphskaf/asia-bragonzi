import React from "react";
import "../About/About.css";
import { FaAngleUp } from "react-icons/fa";
import first_icon from "../../assets/icon-6.png";
import second_icon from "../../assets/icon-4.png";
import third_icon from "../../assets/icon-5.png";
import imgp3 from "../img/img-7.jpg";
import History from "./../History/History";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="about-section padding-top oh padding-bottom px-5">
        <div className="container-fluid py-5 px-4">
          <div className="about-me">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4">
                  <span className="font-s40">
                    <span className="relative-span mainColor">About</span>
                  </span>
                  <span>Me</span>
                </h2>
              </div>
              <div className="col-md-8">
                <div className="brdr"></div>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="row">
              <div className="col-md-6 col-12 pt-md-5 pt-0">
                <div className="content-text">
                  <p>
                    She is a center forward who is very active in the team's
                    offensive actions and has a remarkable eye for goal, as well
                    as good penalty-taking skills.Thanks to her characteristics
                    and potential, she is considered among the best Italian and
                    European talents of her generation.
                  </p>
                </div>
                <div className="about-icons">
                  {/* first icon */}
                  <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    <div className="img-icon">
                      <img src={first_icon} alt="" />
                    </div>
                    <div className="content-text px-3">
                      <h6>Biography</h6>
                      <h6 className="my-text-Sans">Club, Nazionale</h6>
                    </div>
                  </div>
                  {/* second icon */}
                  <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    <div className="img-icon">
                      <img src={second_icon} alt="" />
                    </div>
                    <div className="content-text px-3">
                      <h6>Stats</h6>
                      <h6 className="my-text-Sans">
                        Presenze e reti nei club, Cronologia presenze e reti in
                        nazionale
                      </h6>
                    </div>
                  </div>
                  {/* third icon */}
                  <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    <div className="img-icon">
                      <img src={third_icon} alt="" />
                    </div>
                    <div className="content-text px-3">
                      <h6>Clubs</h6>
                      <ul className="my-text-Sans px-3">
                        <li>Club</li>
                        <li>Nazionale</li>
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
                        style={{ maxHeight: "600px" }}
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
        <i>
          <FaAngleUp />
        </i>
      </div>
    </>
  );
}
