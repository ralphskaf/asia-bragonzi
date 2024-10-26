import React from 'react'
import './Footer.css'
import { FaFacebookF ,FaTwitter  } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="text-center  bg-ff">
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4 pos-f ">
            <div>
              <h1 className="pt-5">Follow Me</h1>
              <div className="icon-container">
                <Link
                  to="https://www.facebook.com/asiabragonzi11?mibextid=ZbWKwL"
                  className="icon-link">
                  <div className="icon-circle">
                    <i>
                      <FaFacebookF />
                    </i>
                  </div>
                </Link>
                <Link to="https://x.com/Asbra2001" className="icon-link">
                  <div className="icon-circle">
                    <i>
                      <FaTwitter />
                    </i>
                  </div>
                </Link>
                <Link to="https://www.instagram.com/asiabragonzi__/?igsh=MTJmN3hhNTljZnBidA%3D%3D" className="icon-link">
                  <div className="icon-circle">
                    <i>
                      <CiInstagram />
                    </i>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
      {/* <div className=' icoon pt-5  '>

<i><FaFacebookF /></i>
<i><FaTwitter /></i>
<Link to="https://www.instagram.com/asiabragonzi__?igsh=MTJmN3hhNTljZnBidA==" className='li'>
<i><CiInstagram /></i>

</Link>
</div> */}
    </>
  );
}
