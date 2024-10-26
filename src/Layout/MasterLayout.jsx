import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import About from "../component/About/About";
import Achievement from "../component/Achievement/Achievement";
import Home from "../component/Home/Home";
import Navbar from "./../component/Navbar/Navbar";
import BannerShape from "../component/Home/BannerShape";
import History from "./../component/History/History";
import Footer from './../component/Footer/Footer';
import Photos from './../component/Photos/Photos';
import Skills from './../component/Skills/Skills';

const MasterLayout = () => {
  const location = useLocation(); // للحصول على المسار الحالي

  return (
    <>
      <div
        className={`master-layout position-relative ${
          location.pathname === "/" ? "with-background" : ""
        }`}>
        {location.pathname === "/" && (
          <>
            <BannerShape customLeft="14%" />
            <BannerShape customLeft="30%" />
            <BannerShape customLeft="42%" />
            <BannerShape customLeft="56%" />
            <BannerShape customLeft="70%" />
            <BannerShape customLeft="85%" />
          </>
        )}
        <Navbar />
        {location.pathname === "/" && <Home />}
      </div>

      {location.pathname === "/" ? (
        <div>
          <About />
          <Achievement />
          <Photos /> 
          <Skills />  

        </div>
      ) : (
        <div className="Outlet">
          <Outlet />
        </div>
      )}

      <div>
        <Footer />
      </div>
    </>
  );
};

export default MasterLayout;
