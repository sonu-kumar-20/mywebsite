import React from 'react';
import './Home.css';
import myimage from '../../assets/myimage.png';
  import { useGSAP} from "@gsap/react";
import gsap from "gsap"
import { Typewriter } from 'react-simple-typewriter';

import WhatsAppButton from '../Skills/WhatsAppButton';
const Home = () => {
  
   useGSAP(()=>{
    let tl1 = gsap.timeline();


    tl1.from("img",{
           x: 200,
    y: 100,
    duration: 0.5,
    opacity: 0,
    scale: 0.5,
    ease: "power2.out",
    delay: 0.2
    })
   })
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
      <WhatsAppButton/>
    </div>
  );
};

export default Home;
