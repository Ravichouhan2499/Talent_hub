// CharacterLabsShowcase.jsx
import React, { useState } from 'react';
import './feature.css';
import img from '../../assets/images/dhoni.png'; // Placeholder image for the first team member
import img1 from '../../assets/images/sunilChettri.png'; // Placeholder image for the second team member
import img2 from '../../assets/images/sachin.png';
import img3 from '../../assets/images/pvsindhu.png';
import img4 from '../../assets/images/gukeshh.png';
import img5 from '../../assets/images/Team6.png';
import img6 from '../../assets/images/Team7.png';



const CharacterLabsShowcase = () => {
 
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    const teamMembers = [
      img,
      img1,
      img2,
      img3,
      img4,
      img5,
    ];
  
    return (
      <div className="showcase-container">
        {/* Left Side - Text Content */}
        <div className="text-content">
          <div className="brand-name">
            <h2>TALENT HUB</h2>
          </div>
          <h1 className="main-heading">Connect with our Mentors team</h1>
          <p className="sub-heading">
            Meet the passionate artists, athletes, innovators, and creators driving our vision forward.
          </p>
        </div>
  
        {/* Right Side - Image Grid */}
        <div className="image-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`image-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={member} 
                alt={`Team member ${index + 1}`} 
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  

export default CharacterLabsShowcase;