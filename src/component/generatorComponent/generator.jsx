
import React from 'react';
import './generator.css';
import img from '../../assets/images/artt11.jpg'
import img1 from '../../assets/images/afff.jpg';
import img2 from '../../assets/images/talant.jpg';
import img3 from '../../assets/images/talent1.jpg';

const ContentCreationPlatform = () => {
  
    return (
      <div className="platform-container">
        <div className="header-section">
          <div className="title-container">
            <h1 className="main-title">Explore your<br />hidden talents</h1>
          </div>
          <div className="subtitle-container">
            <p className="subtitle">
              Find your passion — be it music, art, sports, or innovation.  
              Showcase your skills to the world and unlock endless opportunities.
            </p>
          </div>
        </div>
  
        <div className="cards-container">
          <div className="feature-card">
            <div className="card-content">
              <span className="card-tag">MUSIC</span>
              <h2 className="card-title">Unleash your voice</h2>
              <p className="card-description">
                Share your singing, songwriting, or instrumental talent with a global audience.
              </p>
            </div>
            <div className="card-image-container">
              <img 
                src={img} 
                alt="Musician performing on stage" 
                className="card-image" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
  
          <div className="feature-card">
            <div className="card-content">
              <span className="card-tag">ART & DESIGN</span>
              <h2 className="card-title">Showcase your creativity</h2>
              <p className="card-description">
                Exhibit your artworks, designs, and crafts to inspire others and build your brand.
              </p>
            </div>
            <div className="card-image-container">
              <img 
                src={img1}
                alt="Artist painting a colorful canvas" 
                className="card-image" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
  
          <div className="feature-card">
            <div className="card-content">
              <span className="card-tag">SPORTS</span>
              <h2 className="card-title">Fuel your athletic spirit</h2>
              <p className="card-description">
                Display your sports skills — from football to skateboarding — and join a vibrant community.
              </p>
            </div>
            <div className="card-image-container">
              <img 
                src={img2} 
                alt="Athlete running on a track" 
                className="card-image" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
  
          <div className="feature-card">
            <div className="card-content">
              <span className="card-tag">INNOVATION</span>
              <h2 className="card-title">Build your big ideas</h2>
              <p className="card-description">
                Invent, code, or engineer new possibilities — bring your talent to life through innovation.
              </p>
            </div>
            <div className="card-image-container">
              <img 
                src={img3} 
                alt="Young innovator presenting a project" 
                className="card-image" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          
        </div>

        
        
        <button className="arrow-button" >
          <span className="arrow-icon">→</span>
        </button>
      </div>
    );
  };
  
  

export default ContentCreationPlatform;