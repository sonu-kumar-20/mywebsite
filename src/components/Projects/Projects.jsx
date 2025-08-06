import Card from '../Card/Card'
import './Project.css'
import React from 'react'
import myhome from "../../assets/myhome.png"
import mymusic from "../../assets/mymusic.png"
const About = () => {
  return (
    <div id='project'>
      <h1 id="abouthone">1+ YEARS EXPERINCED IN MULTIPLE PROJECTS  </h1>
     <div className="slider">
  <div className='carddiv'>
    <Card image={myhome} title="My Home"/> {/* If Card is just an image or icon, it's okay */}

    <div className="card-content">
      <p className="card-text">
        This is a full stack project with advanced features: OTP verification, image upload, live chat with house owner, and search listings by city/title/location.
      </p>
      <div className="card-buttons">
        <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
          <button>Source Code</button>
        </a>
        <a href="https://myapartment.onrender.com/listings" target="_blank" rel="noopener noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>
  </div>

   <div className='carddiv'>
    <Card /> {/* If Card is just an image or icon, it's okay */}

    <div className="card-content">
      <p className="card-text">
        This is a full stack project with advanced features: OTP verification, image upload, live chat with house owner, and search listings by city/title/location.
      </p>
      <div className="card-buttons">
        <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
          <button>Source Code</button>
        </a>
        <a href="https://your-live-project-link.com" target="_blank" rel="noopener noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>
  </div>


   <div className='carddiv'>
    <Card title="My Music" image={mymusic}/> {/* If Card is just an image or icon, it's okay */}

    <div className="card-content">
      <p className="card-text">
     responsive music player using React with routing, allowing users to play, like, and manage songs, create playlists, and mark favorites — optimized for both desktop and mobile.
      </p>
      <div className="card-buttons">
        <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
          <button>Source Code</button>
        </a>
        <a href="https://my-music-sss.netlify.app/" target="_blank" rel="noopener noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About