import React from 'react'
import './home.css' // Importing CSS for styling
import img1 from '../../assets/images/combinator1.png'
import img2 from '../../assets/images/nvidia.png'
// import logo from '../../assets/images/logo2-1.jpg'
import logo from '../../assets/images/talaent-1.png'

export default function Home() {
  return (<>
       <div className="rn-landing-container">
      {/* Background video */}
      <div className="rn-video-background">
        <video 
          className="rn-background-video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/city-background-poster.jpg"
        >
          <source src='/videos/videohubb.mp4' type="video/mp4" />
          {/* Note: Video is included but won't play in this preview environment */}
          Your browser does not support the video tag.
        </video>
        <div className="rn-overlay"></div>
      </div>
      
      <header className="rn-header">
        <div className="rn-logo">
          <img src={logo} alt="RenderNet" className="rn-logo-image" />
          <span className="rn-logo-text"></span>
        </div>
        <button className="rn-launch-button">Launch app</button>
      </header>
      
      <main className="rn-main-content">
        <div className="rn-hero-content">
          <h1 className="rn-hero-title">
          Discover and Showcase<br />
          Top Talent all in One Place
          </h1>
          <p className="rn-hero-subtitle">
            Create stunning <span className="rn-highlight">images and videos</span> starring<br />
            your custom-designed virtual humans
          </p>
          <button className="rn-create-button">Create now</button>
        </div>
        
        <div className="rn-backed-by">
          <span className="rn-backed-text"></span>
          <div className="rn-sponsor-logos">
            {/* <img src={img1} alt="Y Combinator" className="rn-sponsor-logo" />
            <img src={img2} alt="NVIDIA Inception Program" className="rn-sponsor-logo rn-nvidia" /> */}
          </div>
        </div>
      </main>
    </div>  </>
  )
}
