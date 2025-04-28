import React, { useEffect, useState } from 'react';
import './about2.css';


export default function ExpertGrid() {
  const [isAnimating, setIsAnimating] = useState(false);
  
//   useEffect(() => {
//     // Start animation after component mounts
//     setIsAnimating(true);
    
//     // Optional: create a repeating animation cycle
//     const interval = setInterval(() => {
//       setIsAnimating(prev => !prev);
//     }, 5000); // Toggle animation every 5 seconds
    
//     return () => clearInterval(interval);
//   }, []);

  const experts = [
    { id: 1, title: "Professionals", icon: "👔" },
    { id: 2, title: "Relationship", icon: "💘" },
    { id: 3, title: "Development", icon: "🚀" },
    { id: 4, title: "Astrology & More", icon: "✋" },
    { id: 5, title: "Sleep Issues", icon: "😴" },
    { id: 6, title: "Entrance exams", icon: "📝" },
    { id: 7, title: "Startup/Fund Raise", icon: "💼" },
    { id: 8, title: "Burnout", icon: "🔥" },
    { id: 9, title: "Resume review", icon: "📄" },
    
  ];

  return (
    <div className="expert-page">
      <div className="left-section">
        <div className="live-session">
          <span className="status-dot"></span>
          <p>35 users are taking live session</p>
        </div>
        
        <h1>Show Your Talent to Your Mentors <br/> Anytime, Anywhere!</h1>
        
        <div className="booking-info">
          <p>Book a time and connect 1:1 or set your prices and start monetising your time</p>
        </div>
        
        <div className="ai-search">
          <div className="ai-icon">AI</div>
          <input type="text" placeholder="Help I'm breaking up" />
          <button className="ask-button">
            <span className="icon">⚡</span>
            Ask AI
          </button>
        </div>
      </div>
      
      <div className="right-section">
        <div className={`expert-grid ${isAnimating ? 'animate' : ''}`}>
          {experts.map((expert, index) => {
            // Calculate the row based on the index
            const row = Math.floor(index / 3);
            // Define the row class for animation
            const rowClass = row % 2 === 0 ? "row-odd" : "row-even";
            
            return (
              <div 
                key={expert.id} 
                className={`expert-box ${rowClass}`}
              >
                <div className="expert-content">
                  <div className="expert-icon">{expert.icon}</div>
                  <h3>{expert.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}