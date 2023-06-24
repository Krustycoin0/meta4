import React from 'react';
import gpt3Logo from '../../assets/logos.png';
import './Footer.css';

const Footer = () => {
    return (
      <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>

        <div className="gpt3__footer-btn">
          <p onClick={() => window.location = 'mailto:lisprocoin@gmail.com'}>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3_logo" />
            <p>Jyotirmoy Roy <br /> All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Lisprocooin </p>
            <p>+91 90xxXXXX</p>
            <p>lisprocoin@gmail.com</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
          <p>@2021 Jyotirmoy Roy. All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer
