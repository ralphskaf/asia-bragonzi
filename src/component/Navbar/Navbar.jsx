import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { useVideo } from "../../Layout/VideoContext";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const { isVideoOpen } = useVideo();
  const location = useLocation();
  const { t, i18n } = useTranslation();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getCurrentLanguage = () => {
    switch (i18n.language) {
      case "en":
        return t("english");
      case "it":
        return t("italian");
      default:
        return t("language");
    }
  };

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
                {t("home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                {t("about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/achievement">
                {t("header_achievement")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/photos">
                {t("media")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                {t("header_skills")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                {t("contact")}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {getCurrentLanguage()}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage("en")}
                  >
                    {t("english")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage("it")}
                  >
                    {t("italian")}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
