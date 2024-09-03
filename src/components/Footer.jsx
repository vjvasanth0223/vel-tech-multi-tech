import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="./emblem.png" alt="Vel Tech Logo" className="footer-logo" />

        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://example.com/nirf2023">NIRF 2023</a></li>
            <li><a href="https://example.com/ariia2022">ARIIA 2022</a></li>
            <li><a href="https://example.com/fee-payment">Fee Payment</a></li>
            <li><a href="https://example.com/grievances-redressal">Grievances Redressal Committee</a></li>
          </ul>
        </div>

        <div className="useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="https://example.com/nirf2023">NIRF 2023</a></li>
            <li><a href="https://example.com/ariia2022">ARIIA 2022</a></li>
            <li><a href="https://example.com/fee-payment">Fee Payment</a></li>
            <li><a href="https://example.com/grievances-redressal">Grievances Redressal Committee</a></li>
          </ul>
        </div>

        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>#42, Vel Tech Road,<br /> Vel Nagar, Avadi,<br /> Chennai, Tamilnadu, 600062</p>
          <p>+91 7358701999</p>
          <p><a href="mailto:admission@veltechmultitech.org">admission@veltechmultitech.org</a></p>
        </div>

        <div className="social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com">
              <img src="https://www.svgrepo.com/show/475654/facebook-color.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com">
              <img src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com">
              <img src="https://www.svgrepo.com/show/475673/instagram-color.svg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com">
              <img src="https://www.svgrepo.com/show/475707/linkedin-color.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; 2023 Vel Tech Multitech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
