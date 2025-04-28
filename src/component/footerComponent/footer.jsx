// TalentHubFooter.jsx
import React from 'react';
import './footer.css';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube, FaDiscord } from 'react-icons/fa';

const TalentHubFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and Social Media */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/api/placeholder/150/50" alt="Talent Hub Logo" />
            <h2>Talent Hub</h2>
          </div>
          
          <div className="social-links">
            <a href="https://twitter.com/talenthub" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/talenthub" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@talenthub" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="https://youtube.com/talenthub" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://discord.gg/talenthub" aria-label="Discord">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-navigation">
          {/* Advanced Users Section */}
          <div className="footer-section">
            <h3>For advanced users</h3>
            <div className="download-button">
              <div className="apple-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.33-3.14-2.57-1.71-2.47-3.03-7.02-1.27-10.08.88-1.54 2.45-2.52 4.14-2.55 1.29-.01 2.52.87 3.32.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="button-text">
                <span>Get the app</span>
                <span>MacOS</span>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/api-docs">API Documentation</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TalentHubFooter;