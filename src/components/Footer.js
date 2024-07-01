import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="section section-logo-newsletter">
            <img src={require('../assets/logo.png')} alt="Logo" className="footerLogo" />
            <div className="newsletter">
                <span>Newsletter</span>
                <div className="newsletter-input-wrapper">
                    <input type="email" placeholder="Enter your email address" />
                    <button>Get Notifications</button>
                </div>
            </div>

          </div>
          <div className="section section-policies">
            <h4>Policies</h4>
            {['Almnd Policy', 'Privacy Policy', 'Contact Us'].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="section section-socials">
            <h4>Socials</h4>
            {['Facebook', 'LinkedIn', 'Instagram', 'Twitter', 'YouTube'].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="section section-contact">
            <h4>Contact Us</h4>
            <p>+91 6364840327</p>
            <p>join@almnd.in</p>
            <p>2nd Floor, Emirates Arcade, 80 Feet Rd, behind Water Tank, Manchegowdana koppalu, II Stage, Vijayanagar, Mysuru, Karnataka 570017</p>
          </div>
        </div>
        <p className="footer-bottom">© 2023 First Floor Infotech Private Limited All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
