import React, { useEffect, useState, useRef } from 'react';
import './about2.css'; // Importing CSS for styling
// Note: Ensure './about2.css' has the updated CSS we'll provide
import img from '../../assets/images/singing.png'

export default function ExpertGrid() {
  const [isAnimating, setIsAnimating] = useState(true); // Start with animation on
  const [activeExpert, setActiveExpert] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [userCount, setUserCount] = useState(35);
  const gridRef = useRef(null);
  
  // useEffect(() => {
  //   // Start animation immediately after component mounts
  //   setIsAnimating(true);
    
  //   // Create a repeating animation cycle if needed
  //   const interval = setInterval(() => {
  //     // Instead of toggling, ensure animation stays on or control specific animations
  //     // For troubleshooting, we'll keep it always on
  //     setIsAnimating(true);
  //   }, 6000);
    
  //   // Random users count animation
  //   const userInterval = setInterval(() => {
  //     setUserCount(Math.floor(Math.random() * 10) + 30);
  //   }, 5000);
    
  //   return () => {
  //     clearInterval(interval);
  //     clearInterval(userInterval);
  //   };
  // }, []);

  const experts = [
    { id: 1, title: "Singing", image: "🎶", color: "#4A90E2" },
    { id: 2, title: "Dance", image: "💃🏽", color: "#E2574A" },
    { id: 3, title: "Music", image: "🎻", color: "#50E3C2" },
    { id: 4, title: "Acting", image: "🎬", color: "#9B59B6" },
    { id: 5, title: "Astrologer", image: "😴", color: "#3498DB" },
    { id: 6, title: "Football", image: "⚽", color: "#F39C12" },
    { id: 7, title: "cricket", image: "🏏", color: "#2ECC71" },
    { id: 8, title: "E-Commerce", image: "🛒", color: "#E74C3C" },
    { id: 9, title: "C-creator", image: "🎞️", color: "#1ABC9C" },
  ];

  return (
    <div className="expert-page">
      <div className="left-section">
        <div className="live-session">
          <div className="status-dot"></div>
          <p>{userCount} users are taking live session</p>
        </div>
        
        <h1 className="main-heading">
          Show Your Talent to Your Mentors <br/> Anytime, Anywhere!
        </h1>
        
        <div className="booking-info">
          <p> <b>Book a time and connect 1:1 or set your prices and start monetising your time</b></p>
        </div>
        
        {/* <div className="ai-search-container">
          <div className="ai-search">
            <div className="ai-icon">AI</div>
            <input 
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Help I'm breaking up" 
            />
            <button className="ask-button">
              <span className="icon">⚡</span>
              Ask AI
            </button>
          </div>
          
          {searchValue && (
            <div className="search-suggestions">
              <p>Suggestions for "{searchValue}"</p>
              <div className="suggestion-items">
                {['Relationship advice', 'Career guidance', 'Personal development'].map((item, i) => (
                  <div key={i} className="suggestion-item">
                    <span className="suggestion-icon">⚡</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div> */}
      </div>
      
      <div className="right-section" ref={gridRef}>
        <div className={`expert-grid ${isAnimating ? 'animate-grid' : ''}`}>
          {experts.map((expert, index) => {
            // Calculate the row and column based on the index
            const row = Math.floor(index / 3);
            const column = index % 3;
            
            // Assign classes for auto-scrolling animation - modify classes to ensure they work
            let animationClass = '';
            if (row === 0) animationClass = 'scroll-up';
            else if (row === 1) animationClass = 'scroll-down';
            else if (row === 2) animationClass = 'scroll-up';
            
            // Assign delay based on column for staggered effect
            const delayClass = 
              column === 0 ? 'delay-0' : 
              column === 1 ? 'delay-1' : 
              column === 2 ? 'delay-2' : '';
            
            return (
              <div 
                key={expert.id} 
                className={`expert-box ${animationClass} ${delayClass} animated-box`}
                onClick={() => setActiveExpert(expert.id === activeExpert ? null : expert.id)}
                style={{
                  '--expert-color': expert.color,
                  '--expert-glow': `${expert.color}80`,
                  // Add animation delay directly in inline style for better control
                  animationDelay: `${column * 0.2}s`
                }}
              >
                <div className="expert-content">
                  <div className="expert-icon">{expert.image}</div>
                  <h3>{expert.title}</h3>
                  
                  {expert.id === activeExpert && (
                    <div className="expert-details">
                      Connect with experts in {expert.title.toLowerCase()}
                    </div>
                  )}
                </div>
                <div className="glow-effect"></div>
                
                {/* Decorative elements for animation */}
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
              </div>
            );
          })}
        </div>
        
        {/* Background particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="bg-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}