import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="text-center bg-ff">
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4 pos-f">
            <div>
              <h1 className="pt-5">{t("follow_me")}</h1>
              <div className="icon-container">
                <Link
                  to="https://www.facebook.com/asiabragonzi11?mibextid=ZbWKwL"
                  className="icon-link"
                  target="_blank"
                >
                  <div className="icon-circle">
                    <i>
                      <FaFacebookF />
                    </i>
                  </div>
                </Link>
                <Link
                  to="https://x.com/Asbra2001"
                  className="icon-link"
                  target="_blank"
                >
                  <div className="icon-circle">
                    <i>
                      <FaTwitter />
                    </i>
                  </div>
                </Link>
                <Link
                  to="https://www.instagram.com/asiabragonzi__/?igsh=MTJmN3hhNTljZnBidA%3D%3D"
                  className="icon-link"
                  target="_blank"
                >
                  <div className="icon-circle">
                    <i>
                      <FaInstagram />
                    </i>
                  </div>
                </Link>
                {/* <Link
                  to="https://www.tiktok.com/@asiabragonzi?_t=8qsI6hZ0mX4&_r=1"
                  target="_blank"
                  className="icon-link"
                >
                  <div className="icon-circle">
                    <i>
                      <FaTiktok />
                    </i>
                  </div>
                </Link> */}
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
