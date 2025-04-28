// About.jsx
import React, { useState } from 'react';
import './about.css';
import img1 from '../../assets/images/zeo.png';
import img2 from '../../assets/images/nvidia.png';  
import img101 from '../../assets/images/zeo1.png';
import img102 from '../../assets/images/zeo2.png';   
import img103 from '../../assets/images/zeo3.png';    
import img104 from '../../assets/images/zeo4.png';
import img201 from '../../assets/images/zeo5.png';
import img202 from '../../assets/images/zeo6.png';    
import img203 from '../../assets/images/zeo3.png';
import img204 from '../../assets/images/zeo4.png';

const About = () => {
  // Talent data with profile images and showcase images
  const talents = [
    {
      id: 1,
      name: 'Zoe',
      description: 'Singing Sensation',
      profileImg: img1,
      showcaseImages: [
        img102,
        img101,
        img103,
        img104,
      ]
    },
    {
      id: 2,
      name: 'Sam',
      description: 'Creative Dancer',
      profileImg: img2,
      showcaseImages: [
        img201,
        img202,
        img203,
        img204,
      ]
    },
    {
      id: 3,
      name: 'Ana',
      description: 'Artistic Painter',
      profileImg: '/images/profiles/ana-profile.jpg',
      showcaseImages: [
        '/images/collage/ana-1.jpg',
        '/images/collage/ana-2.jpg',
        '/images/collage/ana-3.jpg',
        '/images/collage/ana-4.jpg',
      ]
    },
    {
      id: 4,
      name: 'Eva',
      description: 'Adventure Photographer',
      profileImg: '/images/profiles/eva-profile.jpg',
      showcaseImages: [
        '/images/collage/eva-1.jpg',
        '/images/collage/eva-2.jpg',
        '/images/collage/eva-3.jpg',
        '/images/collage/eva-4.jpg',
      ]
    }
  ];

  // State to track the selected talent (default to first talent)
  const [selectedTalent, setSelectedTalent] = useState(talents[0]);

  // Function to handle talent selection
  const handleTalentSelect = (talent) => {
    setSelectedTalent(talent);
  };

  return (
    <div className="cc-character-collage-container">
      <div className="cc-content-wrapper">
        {/* Left section - Headline and Talent Selection */}
        <div className="cc-left-section">
          <h1 className="cc-main-heading">
            Find Your<br />
            Hidden Talent
          </h1>

          {/* Talent profiles list */}
          <div className="cc-character-profiles">
            {talents.map((talent) => (
              <div 
                key={talent.id}
                className={`cc-character-profile ${selectedTalent.id === talent.id ? 'cc-active' : ''}`}
                onClick={() => handleTalentSelect(talent)}
              >
                <div className="cc-profile-image-container">
                  <img 
                    src={talent.profileImg} 
                    alt={talent.name} 
                    className="cc-profile-image"
                  />
                </div>
                <div className="cc-profile-text">
                  <h3 className="cc-profile-name">{talent.name}</h3>
                  <p className="cc-profile-description">{talent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right section - Description and Showcase */}
        <div className="cc-right-section">
          <p className="cc-description">
            Explore talents from across the world. Whether it's singing, dancing, painting,
            or photography — discover the passion that drives individuals to greatness.
          </p>

          {/* Image showcase */}
          <div className="cc-image-collage">
            <div className="cc-collage-image cc-image-top-left">
              <img src={selectedTalent.showcaseImages[0]} alt={`${selectedTalent.name} showcase 1`} />
            </div>
            <div className="cc-collage-image cc-image-top-right">
              <img src={selectedTalent.showcaseImages[1]} alt={`${selectedTalent.name} showcase 2`} />
            </div>
            <div className="cc-collage-image cc-image-middle">
              <img src={selectedTalent.showcaseImages[2]} alt={`${selectedTalent.name} showcase 3`} />
            </div>
            <div className="cc-collage-image cc-image-bottom">
              <img src={selectedTalent.showcaseImages[3]} alt={`${selectedTalent.name} showcase 4`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
