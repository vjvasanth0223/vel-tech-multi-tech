import React from 'react';
import '../css/Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <header className="top-header">
        <div className="header-content">
          <ul className="header-links">
            <li><a href="https://example.com/collegecode1122">College Code 1118</a></li>
            <li><a href="https://example.com/admissions">Admissions</a></li>
            <li><a href="https://example.com/alumni">Alumni</a></li>
            <li><a href="https://example.com/naac">NAAC</a></li>
            <li><a href="https://example.com/rankings">Rankings & Accreditations</a></li>
            <li><a href="https://example.com/directory">Directory</a></li>
          </ul>
          <div className="contact-info">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-1024.png"
              alt="Phone Icon"
              className="phone-icon"
            />
            <span>+91 7358701999</span>
          </div>
        </div>
      </header>

      {/* Main Sub Header */}
      <header className="main-header">
        <div className="header-sub">
          <img src="./emblem.png" alt="Vel Tech Logo" className="small-logo" />
          <img src="/vtmt text logo.png" alt="Vel Tech Text" className="logo" />
        </div>
        <nav className="main-menu">
          <a href="#home">Home</a>
          <a href="www.facebook.com">Admission</a>
          <a href="#academics">Academics</a>
          <a href="#coe">COE</a>
          <a href="#placements">Placements</a>
          <a href="#campus-life">Campus Life</a>
          <a href="#contact">Contact</a>
          <a href=""> </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
