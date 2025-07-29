import React from 'react';
import './Home.css';
import myimage from '../../assets/myimage.png';

import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="lefthome">
        <div className="homedetails">
        <div className="line1"> Hi There,
  <span className="wave">👋</span> thanks for visiting!
</div>

          <div className="line1">I'M</div>
          <div className="line2">Sonu Kumar</div>
          <div className="line3">
          
              <Typewriter
                words={['WEB DEVELOPER', 'SOFTWARE DEVELOPER']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={3000}
              />
          </div>
         

             
        </div>

      </div>

      <div className="righthome">
        <img src={myimage} alt="Sonu Kumar" />
      </div>
    </div>
  );
};

export default Home;
