import React, { useEffect, useState } from 'react';
import '../css/HomePageContent.css';

const HomePageContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/infrastructure/entrance.jpg",
    "/infrastructure/stalin.jpg",
    "/infrastructure/ncc.jpg",
    "/infrastructure/entrancee.jpg",
    "/infrastructure/bus.jpg",
    "/infrastructure/cert.jpg",
  ];

  // Function to handle image change via dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to handle arrow clicks
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // 1.5 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Ticker Container */}
      <div className="ticker-container">
        <div className="ticker">
          <p>
            OBE Rankings-A Grade under Gold Category - This Prestigious
            recognition is an honour to the Hardwork and Passion of the
            Institution in the field of Education.
          </p>
        </div>
      </div>

      {/* Image Slider */}
      <div className="slider-container">
        <div className="image-slider">
          <img src={images[currentIndex]} alt="Slider" className="slider-image" />

          {/* Left Arrow */}
          <div className="arrow arrow-left" onClick={() => handleArrowClick('left')}>
            &#9664;
          </div>

          {/* Right Arrow */}
          <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>
            &#9654;
          </div>
        </div>

        {/* Dots for Slider Navigation */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <h2 className="highlights-title">Watch Our Highlights</h2>
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/4QNM9hku5cY"
          title="YouTube video 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/qcjOOwzPNvI"
          title="YouTube video 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/X2SKXTxLH5k"
          title="YouTube video 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* About College and Highlights Section */}
<div className="home-page-content">
  <div className="section about-college">
    <h2>About the College</h2>
    <p>
      Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College, An
      Autonomous Institution, has been accredited by NAAC in the year 2016 with
      ‘A’ Grade and with an impressive score of 3.49 / 4.0. The Departments of
      BME, CSE, ECE, EEE, IT & MECH are accredited by the National Board of
      Accreditation. The Institution stands among the top 200 Institutions in
      NIRF India Ranking consecutively for three years in a row. Vel Tech Multi
      Tech is the first Self Financing Affiliated Institution to bag Diamond
      rating in maximum categories in QS – IGAUGE Indian College and University
      Ranking. Our Institution excels as one of the top premiere institutes in
      India owing to its State of the art Infrastructure, well-equipped
      laboratories, and highly qualified and experienced faculty members.
    </p>
  </div>
  <div className="section highlights">
    <h2>Highlights</h2>
    <ul>
      <li>Academic Year 2024 - 2025 ODD Semester Reopen on 15.07.2024</li>
      <li>ODD Semester 3, 5 & 7 Reopen on 15.07.2024.</li>
      <li>Cultural Program on 23.03.2024</li>
      <li>Legal and Ethical Procedural Steps for Startup on 22.03.2024</li>
      <li>Niral Thiruvizha Awareness Program on 11.03.2024 Monday</li>
      <li>Academic Year 2023 - 2024 Even Semester Reopen on 26.02.2024</li>
    </ul>
  </div>
</div>


      {/* Rewards and Recognition Section */}
      <div className="rewards-recognition-container">
        <h2 className="rewards-recognition-title">Rewards & Recognition</h2>
        <div className="rewards-recognition-images">
          <div className="rewards-recognition-image">
            <img src="./rewards & recognitions/aicte-icon-1.png" alt="AICTE" />
          </div>
          <div className="rewards-recognition-image">
            <img src="./rewards & recognitions/ARIIA-new-logo-2.png" alt="ARIIA" />
          </div>
          <div className="rewards-recognition-image">
            <img src="./rewards & recognitions/naac-icon.png" alt="NAAC" />
          </div>
          <div className="rewards-recognition-image">
            <img src="./rewards & recognitions/nba-1.png" alt="NBA" />
          </div>
          <div className="rewards-recognition-image">
            <img src="./rewards & recognitions/nipam.png" alt="NIPAM" />
          </div>
          <div className="rewards-recognition-image">
            <img src="./rewards & recognitions/nirf.png" alt="NIRF" />
          </div>
          <div className="rewards-recognition-image">
            <img src="./rewards & recognitions/qs-icon-1.png" alt="QS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
