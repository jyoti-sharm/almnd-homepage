import React, { useState } from 'react';
import './Header.css'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <header className="header">
      <img src={require('../assets/logo.png')} alt="Logo" className="logo" />
      <nav className={`nav ${isMobile ? 'mobile active' : ''}`}>
        {['Home', 'Full-Stack', 'Front-End', 'Back-End', 'Mobile Application', 'Graphic Design', 'Manual Testing', 'Contact Us'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className={`nav-item ${activeTab === item ? 'active' : ''}`} 
            onClick={() => handleTabClick(item)}
          >
            {item}
          </a>
        ))}
        <div className="buttons">
          <button className="workshop-button">React Workshop</button>
          <button className="enroll-button">Enroll Now</button>
        </div>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
