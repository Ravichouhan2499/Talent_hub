// TalentHubFooter.jsx
import React from 'react';
import './footer.css';
import { 
  FaTwitter, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaDiscord, 
  FaLinkedin,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';
import logo from '../../assets/images/talaent-1.png';

const TalentHubFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-company-info">
          <div className="footer-logo">
            <img src={logo} alt="Talent Hub Logo" className="footer-logo-img" />
            <h2>Talent Hub</h2>
          </div>
          <p className="company-description">
            Connecting exceptional talent with outstanding opportunities worldwide. 
            Your success is our mission.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Ratan Lok Colony
              Vijay Nagar, Indore [M.P.]</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 92382740037</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@makeoversolution.in</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://twitter.com/talenthub" aria-label="Twitter" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/talenthub" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@talenthub" aria-label="TikTok" className="social-icon">
              <FaTiktok />
            </a>
            <a href="https://youtube.com/talenthub" aria-label="YouTube" className="social-icon">
              <FaYoutube />
            </a>
            <a href="https://discord.gg/talenthub" aria-label="Discord" className="social-icon">
              <FaDiscord />
            </a>
            <a href="https://linkedin.com/company/talenthub" aria-label="LinkedIn" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/talenthub" aria-label="Facebook" className="social-icon">
              <FaFacebookSquare />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-navigation">
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/testimonials">Success Stories</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>For Talents</h3>
            <ul>
              <li><a href="/job-seekers">Find Talents</a></li>
              <li><a href="/learning">Learning Hub</a></li>
              <li><a href="/talent-community">Join Community</a></li>
              <li><a href="/portfolio">Create Portfolio</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get The App</h3>
            <p className="app-description">Access opportunities on the go with our mobile app</p>
            <div className="app-buttons">
              <a href="/download/ios" className="download-button">
                <FaApple className="store-icon" />
                <div className="button-text">
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </a>
              <a href="/download/android" className="download-button">
                <FaGooglePlay className="store-icon" />
                <div className="button-text">
                  <span>Get it on</span>
                  <span>Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">© {currentYear} Talent Hub. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/sitemap">Sitemap</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/security">Security</a>
            <a href="/responsible-disclosure">Responsible Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TalentHubFooter;