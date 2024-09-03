import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
            <br>
            </br>
          <img src="./emblem.png" alt="Vel Tech Logo" className="footer-logo" />
        </div>

        

        <div className="footer-section quick-links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://example.com/nirf2023">NIRF 2023</a></li>
            <li><a href="https://example.com/ariia2022">ARIIA 2022</a></li>
            <li><a href="https://example.com/fee-payment">Fee Payment</a></li>
            <li><a href="https://example.com/grievances-redressal">Grievances Redressal Committee</a></li>
          </ul>
        </div>

        <div className="footer-section useful-links-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="https://example.com/nirf2023">NIRF 2023</a></li>
            <li><a href="https://example.com/ariia2022">ARIIA 2022</a></li>
            <li><a href="https://example.com/fee-payment">Fee Payment</a></li>
            <li><a href="https://example.com/grievances-redressal">Grievances Redressal Committee</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info-section">
          <h4>Contact Information</h4>
          <p>#42, Vel Tech Road,<br /> Vel Nagar, Avadi,<br /> Chennai, Tamilnadu, 600062</p>
          <p>+91 7358701999</p>
          <p><a href="mailto:admission@veltechmultitech.org">admission@veltechmultitech.org</a></p>
        </div>
        {/* <div className="footer-section map-section">
          <h4>Find Us Here</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.5721914022824!2d80.10418937321408!3d13.189352110070603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289d88af459f3%3A0xa73242f57fb44db9!2sVel%20Tech%20Multi%20Tech%20Dr.Rangarajan%20Dr.Sakunthala%20Engineering%20College(Autonomous)!5e0!3m2!1sen!2sin!4v1725362602960!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
      </div>

      <div className="footer-section social-media-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032" alt="Facebook" />
            </a>
            <a href="https://x.com" aria-label="X">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/450px-X_logo_2023_original.svg.png?20230728155658" alt="X" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622" alt="Instagram" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/768px-YouTube_full-color_icon_%282017%29.svg.png?20240107144800" alt="YouTube" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png?20210220164014" alt="LinkedIn" />
            </a>
          </div>
        </div>

      <div className="copyright">
        &copy; 2024 Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
