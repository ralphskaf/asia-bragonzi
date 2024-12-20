import React, { useState } from "react";
import axios from "axios";
import icon1 from "../img/location.png";
import icon2 from "../img/contact.png";
import "../ContactForm/ContactForm.css";
import { FaAngleUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send data to Formspree
    axios
      .post("https://formspree.io/f/xzzbdrjv", formData)
      .then((response) => {
        toast.success(t("success_message"));
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error(t("error_message"));
        setIsSubmitting(false);
      });
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="contact-info-section pt-5 pb-3" id="about">
        <div className="container pt-5">
          <div className="row mb-30-none justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-item">
                <div className="contact-info-thumb">
                  <img
                    src={icon2}
                    style={{ width: "100px", height: "100px" }}
                    alt="contact"
                  />
                </div>
                <div className="contact-info-content">
                  <h6 className="title mx-4">{t("phone")}</h6>
                  <ul>
                    <li>
                      <a href="tel:+393703415503" className="phone-link">
                        +393703415503
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-item">
                <div className="contact-info-thumb">
                  <img
                    src={icon1}
                    alt="contact"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="contact-info-content">
                  <h6 className="title mx-4">{t("address")}</h6>
                  <ul>
                    <li>Sassuolo Italy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div>
          <div className="With-me py-5">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4">
                  <span className="font-s40">
                    <span className="mainColor">{t("contact_me")}</span>
                  </span>
                </h2>
              </div>
              <div className="col-md-6">
                <div className="brdr"></div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <input
                type="text"
                name="name"
                placeholder={t("full_name")}
                value={formData.name}
                onChange={handleInputChange}
                required
                className="custom-placeholder"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder={t("email")}
                value={formData.email}
                onChange={handleInputChange}
                required
                className="custom-placeholder"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("message")}
                required
                className="custom-placeholder"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="custom-button my-5"
            >
              {isSubmitting ? t("sending") : t("send_message")}
            </button>
          </form>
        </div>
      </section>

      <div className="scrollBtn" onClick={scrollToTop}>
        <i>
          <FaAngleUp />
        </i>
      </div>
    </div>
  );
}
