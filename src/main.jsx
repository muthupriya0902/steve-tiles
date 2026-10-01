import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="hero" aria-label="Tile collection">
      <img
        className="hero-logo"
        src="/assets/branding/steve-tiles-logo.png"
        alt="Steve Tiles Studio"
      />
      <div className="social-icons" role="group" aria-label="Social and business profiles">
        <img src="/assets/social-icons/facebook-logo.png" alt="Facebook" />
        <img src="/assets/social-icons/instagram-logo.png" alt="Instagram" />
        <img src="/assets/social-icons/youtube-logo.png" alt="YouTube" />
        <img src="/assets/social-icons/linkedin-logo.png" alt="LinkedIn" />
        <img src="/assets/social-icons/google-business-logo.png" alt="Google Business Profile" />
      </div>
      <section className="hero-copy" aria-label="Steve Tiles Studio introduction">
        <h1>
          <span>Welcome to</span>
          <span>Steve Tiles Studio</span>
        </h1>
        <p className="hero-tagline">TILES • DESIGN • SURFACES</p>
        <div className="hero-divider" aria-hidden="true" />
        <p className="hero-description">
          Discover elegant tile and surface solutions
          <br />
          for spaces that deserve a distinctive finish.
        </p>
        <div className="hero-ctas" aria-label="Contact Steve Tiles Studio">
          <a className="hero-cta hero-cta-call" href="tel:+916360083907">
            <img src="/assets/icons/phone-call-icon.png.png" alt="" aria-hidden="true" />
            <span>Call Us</span>
          </a>
          <a
            className="hero-cta hero-cta-maps"
            href="https://maps.app.goo.gl/xbdZhWY5TxaCsX497?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/google-maps-icon.png.png" alt="" aria-hidden="true" />
            <span>Find Us on Map</span>
          </a>
        </div>
      </section>
      <img
        className="hero-tiles"
        src="/assets/tile-products/steve-tiles-3tiles.png"
        alt=""
        aria-hidden="true"
      />
      <section className="contact-panel" aria-label="Steve Tiles Studio contact information">
        <a
          className="contact-item"
          href="https://maps.app.goo.gl/xbdZhWY5TxaCsX497?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon-wrap">
            <img src="/assets/contact-icons/map-icon.png.png" alt="" aria-hidden="true" />
          </span>
          <div className="contact-copy">
            <h2 className="contact-label">SHOWROOM</h2>
            <p className="contact-value">
              32, 7th Cross Rd, Binnamangala,
              <br />
              1st Stage, Indiranagar,
              <br />
              Bengaluru, Karnataka 560038
            </p>
          </div>
        </a>
        <a className="contact-item" href="tel:+916360083907">
          <span className="contact-icon-wrap">
            <img src="/assets/contact-icons/phone-icon.png.png" alt="" aria-hidden="true" />
          </span>
          <div className="contact-copy">
            <h2 className="contact-label">PHONE</h2>
            <p className="contact-value">+91 63600 83907</p>
          </div>
        </a>
        <a className="contact-item" href="mailto:stevetilesstudio@gmail.com">
          <span className="contact-icon-wrap">
            <img src="/assets/contact-icons/mail-icon.png.png" alt="" aria-hidden="true" />
          </span>
          <div className="contact-copy">
            <h2 className="contact-label">EMAIL</h2>
            <p className="contact-value">stevetilesstudio@gmail.com</p>
          </div>
        </a>
        <a className="contact-item" href="https://stevetilesstudio.com/" target="_blank" rel="noopener noreferrer">
          <span className="contact-icon-wrap">
            <img src="/assets/contact-icons/web-icon.png.png" alt="" aria-hidden="true" />
          </span>
          <div className="contact-copy">
            <h2 className="contact-label">ONLINE</h2>
            <p className="contact-value">stevetilesstudio.com</p>
          </div>
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
