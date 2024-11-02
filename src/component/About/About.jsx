import React from "react";
import "../About/About.css";
import { FaAngleUp } from "react-icons/fa";
import first_icon from "../../assets/biography.png";
import second_icon from "../../assets/stats.png";
import third_icon from "../../assets/club.png";
import imgp3 from "../img/img-7.jpg";
import History from "./../History/History";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="about-section padding-top oh padding-bottom px-md-5">
        <div className="container-fluid py-5 px-1">
          {/* <div className="about-me"> */}
          <div className="">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4">
                  <span className="font-s40">
                    {/* <span className="relative-span mainColor">About</span> */}
                    <span className="mainColor">ABOUT ASIA</span>
                  </span>
                  {/* <span>Me</span> */}
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
                  <p>
                    I am a center forward who is very active in my team's
                    offensive actions and have a remarkable eye for goal, as
                    well as strong penalty-taking skills. Thanks to my
                    characteristics and potential, I am considered among the
                    best Italian and European talents of my generation.
                  </p>
                </div>
                <div className="about-icons">
                  {/* first icon */}
                  <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    {/* <div className="img-icon">
                      <img
                        src={first_icon}
                        alt=""
                        style={{ width: "64px", height: "64px" }}
                      />
                    </div> */}
                    <div className="content-text px-2">
                      <h6>
                        <img
                          src={first_icon}
                          alt=""
                          className="me-3"
                          style={{ width: "64px", height: "64px" }}
                        />
                        Biography
                      </h6>
                      <h6 className="my-text-Sans">
                        Asia Bragonzi, born in 2001 in Italy, is a professional
                        footballer who has garnered attention for her skills as
                        a forward. Starting her career with Juventus' youth
                        teams, she later progressed to play for their senior
                        women’s team, making a mark by scoring five goals in her
                        initial appearances between the 2018-2019 and 2019-2020
                        seasons. Following her time with Juventus, she went on a
                        loan to other clubs, including Hellas Verona, Empoli,
                        and Sampdoria. In her recent stint with Sampdoria,
                        Bragonzi notably scored a decisive goal in a game
                        against Juventus. In January 2024, Asia returned to
                        Juventus, ready to reinforce the squad under coach Joe
                        Montemurro amidst ongoing team injuries. She brings back
                        both experience and talent to the Juventus lineup,
                        reflecting her commitment to evolving as a player and
                        contributing to Italian women’s football​ bio
                      </h6>
                    </div>
                  </div>
                  {/* second icon */}
                  {/* <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    <div className="img-icon">
                      <img
                        src={second_icon}
                        style={{ width: "64px", height: "64px" }}
                        alt=""
                      />
                    </div>
                    <div className="content-text px-3">
                      <h6>Stats</h6>
                      <h6 className="my-text-Sans">
                        Presenze e reti nei club, Cronologia presenze e reti in
                        nazionale
                      </h6>
                    </div>
                  </div> */}
                  {/* third icon */}
                  <div
                    className="d-flex align-items-center py-3 mb-3"
                    data-aos="fade-up"
                  >
                    {/* <div className="img-icon">
                      <img
                        src={third_icon}
                        style={{ width: "64px", height: "64px" }}
                        alt=""
                      />
                    </div> */}
                    <div className="content-text px-3">
                      <h6>
                        {" "}
                        <img
                          src={third_icon}
                          style={{ width: "64px", height: "64px" }}
                          alt=""
                          className="me-3"
                        />
                        Clubs
                      </h6>
                      <ul className="my-text-Sans px-3">
                        <li>Juventus F.C. Women (current club)</li>
                        <li>Inter Milan (youth team)</li>
                        <li>Hellas Verona </li>
                        <li>Empoli </li>
                        <li>Sassuolo </li>
                        {/* <li>Hellas Verona </li>
                        <li>Pomigliano </li>
                        <li>Sampdoria </li> */}
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
                        // style={{ maxHeight: "600px", borderRadius: "10px" }}
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
        <div className="scrollBtn" onClick={scrollToTop}>
          <FaAngleUp className="fa-angle-up" />
        </div>
      </div>
    </>
  );
}
