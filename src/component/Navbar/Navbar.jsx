import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { useVideo } from "../../Layout/VideoContext";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const { isVideoOpen } = useVideo();
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      setBgColor("#007294");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    if (!isVideoOpen) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setBgColor("transparent");
    }
  }, [isVideoOpen]);

  useEffect(() => {
    const navbarCollapse = document.getElementById("navbarCollapse");
    const navbarToggler = document.querySelector(".navbar-toggler");

    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
      className="navbar navbar-expand-lg px-5"
    >
      <div className="container-fluid py-2">
        <div className="navbar-brand">
          <NavLink className="img-logo" to="/">
            <img
              src={logo}
              alt="CoolBrand"
              className="w-100"
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </NavLink>
        </div>

        <button
          type="button"
          className="navbar-toggler text-white"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <FaBarsStaggered />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/achievement">
                Achievement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/photos">
                Media
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
