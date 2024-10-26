import React, { useState } from 'react';
import axios from 'axios';
import icon1 from "../img/iconc-1.png"
import icon2 from "../img/iconc-2.png"
import icon3 from "../img/iconc-3.png"
import { Link } from 'react-router-dom';
import '../ContactForm/ContactForm.css'
import { FaAngleUp } from "react-icons/fa";

export default function ContactForm() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
}
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
    // Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = '80f7138a-4a13-4a8d-b2e1-7e18bf62371f';

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
    setSuccessMessage('');
    setErrorMessage('');

    // Send data to Web3Forms
    axios
      .post('https://api.web3forms.com/submit', {
        access_key: WEB3FORMS_ACCESS_KEY,
        ...formData,
      })
      .then((response) => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setErrorMessage('Oops! Something went wrong, please try again.');
        setIsSubmitting(false);
      });
  };
  return (
    <div className='bg-2'>
    <section>
    <section className="hero-section">
  <a href="#about" className="banner-icon">
    <i className="flaticon-down-arrow" />
  </a>
  <div className="container">
    <div className="hero-content">
      <h1 className="title" data-bg="Contact">
        <span>Contact </span>
      </h1>
      <ul className="breadcrumb">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </div>
  </div>
</section>

    </section>

    <>
  {/* === Contact Section === */}
  <div className="contact-info-section  py-5" id="about">
    <div className="container">
      <div className="row mb-30-none justify-content-center">
      <div className="col-lg-4 col-md-6">
          <div className="contact-info-item">
            <div className="contact-info-thumb">
              <img src={icon2} alt="contact" />
            </div>
            <div className="contact-info-content">
              <h6 className="title mx-4">Phone</h6>
              <ul>
                <li>
               39
                </li>
                <li>
               +
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-item">
            <div className="contact-info-thumb">
              <img src={icon1} alt="contact" />
            </div>
            <div className="contact-info-content">
              <h6 className="title mx-4">Address</h6>
              <ul>
                <li>
                Italia
                </li>
                
              </ul>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</>




    {/*  */}
    <section className='container '>
    <div >
    <div className="With-me py-5">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="title py-4 ">
                  <span className="font-s40">
                    <span className="relative-span mainColor">With</span>
                  </span>{" "}
                  <span>Me</span>
                </h2>
              </div>
              <div className="col-md-6">
                <div className="brdr"></div>
              </div>
            </div>
          </div>

      {/* Success or error message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <div className='contact-form-group'>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            name="name"
            placeholder='full name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            name="email"
            placeholder='Email'

            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder='Message'

            required
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className='custom-button  my-5' >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </section>
   
    {/*  */}
    <div className="scrollBtn"  onClick={scrollToTop}>
                    <i ><FaAngleUp /> </i>
                </div>
    </div>
  )
}
