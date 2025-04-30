import React from 'react';
import './work.css'; // Keep using your existing CSS or adjust if needed
import img1 from '../../assets/images/young.png'; // Placeholder image for the first team member
import img2 from '../../assets/images/youngage2.png'; // Placeholder image for the second team member

const TalentLearningShowcase = () => {
  return (
    <div className="pose-control-container">
      {/* Main content */}
      <div className="main-content">
        {/* Left text section */}
        <div className="text-content">
          <div className="section-label">TALENT HUB LEARNING</div>
          <h1 className="main-heading">Learn. Grow. Succeed.</h1>
          <p className="description">
            Unlock your true potential with our expert-led programs, workshops, and hands-on training sessions.
          </p>
        </div>
        
        {/* Right images section */}
        <div className="images-container">
          <div className="image-box learning">
            <img src={img1} alt="Student learning in a workshop" />
          </div>
          <div className="image-box collaboration">
            <img src={img2} alt="Team collaborating on a project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentLearningShowcase;
