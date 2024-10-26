import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // استخدم NavLink بدلاً من Link
import "../Navbar/Navbar.css"; // تأكد من أن المسار صحيح
import logo from "../../assets/logo.png"; // تأكد من وجود الصورة في المسار المحدد
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      setBgColor("#191634"); // اللون عند التمرير
    } else {
      setBgColor("transparent"); // اللون الافتراضي
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className="navbar navbar-expand-lg px-5">
      <div className="container-fluid py-2">
        <div className="navbar-brand">
          <NavLink className="img-logo" to="/">
            <img src={logo} alt="CoolBrand" className="w-100" />
          </NavLink>
        </div>

        <button
          type="button"
          className="navbar-toggler text-white"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
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
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/achievement">
              achievement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/photos">
                only video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                Skills
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
