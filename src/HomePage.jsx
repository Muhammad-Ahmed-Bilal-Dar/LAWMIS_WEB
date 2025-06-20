import React from "react";
import heroBg from "./assets/hero-slider-bg.jpg";
import lawmisLogo from "./assets/lawmis logo.png";
import pptaLogo from "./assets/PPTA-logo-landing.png";
import punjabLogo from "./assets/punjab-logo-landing.png";
import transportLogo from "./assets/transport-logo-landing.png";
import nespakLogo from "./assets/nespak.png";
import galleryImg1 from "./assets/gallery-img1.jpg";
import galleryImg2 from "./assets/gallery-img2.jpg";
import galleryImg3 from "./assets/gallery-img3.jpg";
import galleryImg4 from "./assets/gallery-img4.jpg";
import galleryImg5 from "./assets/gallery-img5.jpg";
import galleryImg6 from "./assets/gallery-img6.jpg";
import galleryImg7 from "./assets/gallery-img7.jpg";
import galleryImg8 from "./assets/gallery-img8.jpg";
import partnerIcon1 from "./assets/partner-icon1.jpg";
import partnerIcon2 from "./assets/partner-icon2.jpg";
import partnerIcon3 from "./assets/partner-icon3.jpg";
import partnerIcon4 from "./assets/partner-icon4.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Top Bar */}
      <div className="top-bar">
        <span>TRANSPORT AND MASS TRANSIT DEPARTMENT, GOVT. OF THE PUNJAB</span>
      </div>

      {/* Header & Navbar */}
      <header className="header">
        <div className="header-left">
          
          
          <img src={lawmisLogo} alt="LAWMIS Logo" className="header-logo header-logo-lawmis" />
        </div>
        <nav className="navbar">
          <a href="#" className="nav-link">ABOUT</a>
          <a href="#" className="nav-link">BECOME A VENDOR</a>
          <a href="#" className="nav-link">STATION REGISTRATION</a>
          <a href="#" className="nav-link">PARTNER WORKSHOPS</a>
        </nav>
        <div className="header-logos-right">
          <img src={pptaLogo} alt="PPTA Logo" className="header-logo header-logo-ppta" />
          <img src={transportLogo} alt="Transport Logo" className="header-logo header-logo-transport" />
          <img src={punjabLogo} alt="Punjab Logo" className="header-logo header-logo-punjab" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <img className="hero-bg" src={heroBg} alt="Workshop" />
        <div className="hero-overlay">
          <h1>Licensed Automobile Workshop</h1>
          <p>FRAMEWORK FOR GRANT OF LICENSE TO AUTOMOBILE WORKSHOPS<br />FOR CONDUCTING VEHICLE INSPECTION AND FITNESS CERTIFICATION FOR MOTOR CARS</p>
        </div>
        <button className="register-banner-btn">BECOME OUR VALUABLE PARTNERS AND REGISTER YOUR WORKSHOP FOR LAWMIS SERVICES <span className="register-btn-inner">REGISTER WORKSHOP</span></button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-left">
            <a href="#" className="download-link">DOWNLOAD FRAMEWORK FOR SUBMISSION OF LICENSE APPLICATION <span role="img" aria-label="download">📥</span></a>
            <h2>ABOUT <span className="about-blue">US</span></h2>
            <p className="about-text">
              THE TRANSPORT & MASSTRANSIT DEPARTMENT IS LAUNCHING INITIATIVES TO ENHANCE ROAD SAFETY AND IMPROVE AIR QUALITY, INCLUDING A VEHICLE INSPECTION AND CERTIFICATION SYSTEM FOR PRIVATE MOTORCARS AND JEEPS (P-VICS). THIS INITIATIVE AIMS TO REDUCE VEHICULAR EMISSIONS, COMBAT SMOG, AND ENSURE ROAD SAFETY BY IMPLEMENTING STRINGENT INSPECTION PROTOCOLS TO COMPLY WITH EMISSION STANDARDS AND OTHER SAFETY ISSUES. LICENSED AUTOMOBILE WORKSHOPS WILL CONDUCT THESE INSPECTIONS USING THE LICENSED AUTOMOBILE WORKSHOPS MANAGEMENT INFORMATION SYSTEM (LAWMIS), DEVELOPED BY THE PUNJAB INFORMATION TECHNOLOGY BOARD (PITB). VEHICLE OWNERS WILL REGISTER AND SCHEDULE INSPECTIONS ONLINE, WHILE WORKSHOP OWNERS WILL APPLY FOR LICENSES AND ADHERE TO QUALITY STANDARDS. EXPECTED OUTCOMES INCLUDE IMPROVED AIR QUALITY, INCREASED ROAD SAFETY, AND MORE EFFICIENT SERVICE DELIVERY.
            </p>
          </div>
          <div className="about-right">
            <img src="https://i.ibb.co/6wQkQ7d/workshop-bg.jpg" alt="Workshop" className="about-img" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">OUR SERVICES</h2>
        <div className="services-boxes">
          <div className="service-box">
            <div className="service-icon">📋</div>
            <div className="service-title">AUTOMOBILE WORKSHOP REGISTRATION</div>
          </div>
          <div className="service-box">
            <div className="service-icon">📅</div>
            <div className="service-title">BOOK AN APPOINTMENT FOR VEHICLE FITNESS CERTIFICATE</div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title">GALLERY</h2>
        <div className="gallery-grid">
          {[galleryImg1, galleryImg3, galleryImg2, galleryImg5, galleryImg4, galleryImg6, galleryImg8, galleryImg7].map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img} alt={`Gallery ${i+1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-box">
          <div className="stat-number">3176</div>
          <div className="stat-label">TOTAL VISITORS</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">0</div>
          <div className="stat-label">LICENSED WORKSHOPS</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">0</div>
          <div className="stat-label">VEHICLES INSPECTED</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">0</div>
          <div className="stat-label">CERTIFICATES ISSUED</div>
        </div>
      </section>

      {/* Licensed Workshops Section */}
      <section className="workshops-section">
        <h2 className="section-title">LICENSED WORKSHOPS</h2>
        <select className="district-select">
          <option>Select District</option>
        </select>
        <div className="workshops-grid">
          <div className="workshop-card">
            <img src={partnerIcon1} alt="Workshop 1" />
            <div className="workshop-title">GHAZANFAR INSPECTION CENTER</div>
          </div>
          <div className="workshop-card">
            <img src={partnerIcon2} alt="Workshop 2" />
            <div className="workshop-title">LAHORE INSPECTION AND FITNESS CENTER</div>
          </div>
          <div className="workshop-card">
            <img src={partnerIcon3} alt="Workshop 3" />
            <div className="workshop-title">PAK SUZUKI AND FITNESS CENTER</div>
          </div>
          <div className="workshop-card">
            <img src={partnerIcon4} alt="Workshop 4" />
            <div className="workshop-title">TOYOTA RAVI MOTORS INSPECTION CENTER</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">FAQs</h2>
        <div className="faq-tabs">
          <button className="faq-tab active">Workshop Registration</button>
          <button className="faq-tab">Vehicle Inspection</button>
          <button className="faq-tab">LAWMIS Portal</button>
          <button className="faq-tab">Payment</button>
          <button className="faq-tab">GENERAL</button>
        </div>
        <div className="faq-list">
          {[...Array(9)].map((_, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-question">{i+1}. What is vehicle inspection and certification system for private motor cars / Jeeps (LAWMIS)?</div>
              <div className="faq-answer">The Vehicle Inspection and Certification system for Private Motor Cars/Jeeps include Licensed Automobile Workshops authorized by the Transport & Masstransit Department...</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>POWERED BY</span>
        <img src={nespakLogo} alt="Nespak Logo" className="footer-logo footer-logo-nespak" />
        <span>PUNJAB INFORMATION TECHNOLOGY BOARD-PITB</span>
      </footer>
    </div>
  );
};

export default HomePage; 