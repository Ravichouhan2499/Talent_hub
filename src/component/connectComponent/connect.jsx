// CommunityConnect.jsx
import React from 'react';
import './connect.css';
import img from '../../assets/images/dhoni.png'; // Placeholder image for the first team member
import img1 from '../../assets/images/sunilChettri.png'; // Placeholder image for the second team member
import img2 from '../../assets/images/sachin.png';
import img3 from '../../assets/images/pvsindhu.png';
import img4 from '../../assets/images/gukeshh.png';
import img5 from '../../assets/images/Team6.png';
import img6 from '../../assets/images/Team7.png';

const CommunityConnect = () => {
  // Array of avatar images - replace with actual image paths in your project
  const avatars = [
    { id: 1, src: img, alt: 'Community avatar 1' },
    { id: 2, src: img1, alt: 'Community avatar 2' },
    { id: 3, src: img2, alt: 'Community avatar 3' },
    { id: 4, src: img3, alt: 'Community avatar 4' },
    { id: 5, src: img4, alt: 'Community avatar 5' },
    { id: 6, src: img5, alt: 'Community avatar 6' },
    { id: 7, src: img6, alt: 'Community avatar 7' },
    { id: 8, src: img1, alt: 'Community avatar 8' },
    { id: 9, src: img5, alt: 'Community avatar 9' },
  ];

  return (
    <div className="community-container">
      <div className="content-wrapper">
        {/* Left side - Text content */}
        <div className="text-content">
          <h1 className="heading">Connect, create and collaborate</h1>
          <p className="description">
          Join a vibrant community of learners, mentors, and professionals. Share your journey, enhance your skills, and grow your talent through collaboration and inspiration.
          </p>
          <button className="discord-button">Join Talent Hub</button>
        </div>

        {/* Right side - Avatar grid */}
        <div className="avatar-grid">
          {avatars.map(avatar => (
            <div key={avatar.id} className="avatar-wrapper">
              <img 
                src={avatar.src} 
                alt={avatar.alt} 
                className="avatar-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityConnect;