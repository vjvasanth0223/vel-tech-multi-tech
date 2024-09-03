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
              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Phone_icon.png"
              alt="Phone Icon"
              className="phone-icon"
            />
            <span>1800 100 100</span>
          </div>
        </div>
      </header>

      {/* Main Sub Header */}
      <header className="main-header">
        <div className="header-sub">
          <img src="./emblem.png" alt="Vel Tech Logo" className="small-logo" />
          <img src="/vtmt text logo.png" alt="Vel Tech Text" className="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
