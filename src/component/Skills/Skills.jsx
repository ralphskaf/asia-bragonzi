import React from 'react'
import "../Skills/Skills.css"
import imgp3 from "../img/img-7.jpg"
import {FaAngleUp} from "react-icons/fa";

import img1 from "../img/01.png"
export default function Skills() {
    
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
  return (
   <>
   <section className='container'>
  
   <div className="skills">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4 ">
                  <span className="font-s40">
                    <span className="relative-span mainColor">skills</span>
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
        <h5 className='pt-3'>Pace</h5>
        <div className="progress-container">
          <span className="progress-label">69%</span> {/* النسبة فوق الشريط */}
          <div className="progress" >
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '69%' }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div className="skill mt-3">
        <h5>Shooting</h5>
        <div className="progress-container">
          <span className="progress-label">60%</span>
          <div className="progress" >
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: '60%' }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div className="skill mt-3">
        <h5>Passing</h5>
        <div className="progress-container">
          <span className="progress-label">67%</span>
          <div className="progress" >
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: '67%' }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
{/*  */}

<div className="skill">
        <h5>Dribbling</h5>
        <div className="progress-container">
          <span className="progress-label">66%</span> {/* النسبة فوق الشريط */}
          <div className="progress" >
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '69%' }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div className="skill mt-3">
        <h5>Defending</h5>
        <div className="progress-container">
          <span className="progress-label">30%</span>
          <div className="progress" >
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: '60%' }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div className="skill mt-3">
        <h5>Physicality</h5>
        <div className="progress-container">
          <span className="progress-label">62%</span>
          <div className="progress" >
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: '62%' }}
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
                    <span className="relative-span mainColor">Award </span>
                  </span>{" "}
                  <span>Won </span>
                </h2>
              </div>
              <div className="col-md-6">
                <div className="brdr"></div>
              </div>
            </div>
          </div>
    <div className="mb-30-none">
      <div className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block" data-aos="fade-right">
        <div className="award-thumb">
          <div className="thumb">
            <img src={img1} alt="award"  />
          </div>
          <div className="cont">
            <span>x</span>03
          </div>
        </div>
        <div className="award-content">
          <h4 className="title"> Campionato italiano:2 Juventus: 2018-2019, 2019-2020</h4>
          <p>
          The Women's Serie A, officially called the Women's Serie A eBay for sponsorship reasons,[1] is the top division of the Italian women's football championship, as well as the only one belonging to the professional category, and has been managed, since the 2018-2019 season, by Italian Football Federation (FIGC).[2] From the 2022-2023 season
          </p>
        </div>
      </div>
      <div className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block" data-aos="fade-up">
        <div className="award-thumb">
          <div className="thumb">
          <img src={img1} alt="award" />
          </div>
          <div className="cont">
            <span>x</span>01
          </div>
        </div>
        <div className="award-content">
          <h4 className="title">Coppa Italia: 1 Juventus: 2018-2019</h4>
          <p>
          The Italian Cup, officially called Coppa Italia Ferrovie dello Stato 
          Italiane for sponsorship reasons,[1] is the Italian national football 
          cup reserved for women's football teams, which is held under the aegis of the FIGC and is organized annually
           by the division women's football of the same FIGC
          </p>
        </div>
      </div>
      <div className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block" data-aos="fade-up">
        <div className="award-thumb px-lg-5">
          <div className="thumb">
          <img src={img1} alt="award" />
          </div>
          <div className="cont">
            <span>x</span>97
          </div>
        </div>
        <div className="award-content">
          <h4 className="title">Supercoppa italiana: 2 Juventus: 2019, 2023</h4>
          <p>
          The Supercoppa Italiana, officially called Supercoppa Ferrovie dello 
          Stato Italiane for sponsorship reasons,[1] is a women's football 
          competition established in 1997 which annually pits the top two 
          teams in Serie A and the two finalists of the Italian Cup in a final 
          phase with two semi-finals and a final on a neutral pitch. [2]
          </p>
        </div>
      </div>
      <div className="award-item wow fadeInUp d-lg-flex justify-content-lg-center d-block" data-aos="fade-up">
        <div className="award-thumb px-lg-5">
          <div className="thumb">
          <img src={img1} alt="award" />
          </div>
          <div className="cont">
            <span>x</span>97
          </div>
        </div>
        <div className="award-content">
          <h4 className="title">Individuale Golden Girl: 1 Miglior italiana Under-21: 2020[15]</h4>
          <p>
          The European Golden Girl, often referred to simply as
           Golden Girl, is a football award established by Tuttosport 
           in 2022 and awarded every year to the best Under-21 footballer 
           playing in the top flight of a European championship.[1]
Since 2018, the Turin newspaper has rewarded the best Italian Under-21 footballer.[1]
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<div className="scrollBtn"  onClick={scrollToTop}>
                    <i ><FaAngleUp /> </i>
                </div>
  
   </>
  )
}
