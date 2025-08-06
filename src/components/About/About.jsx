import Card from '../Card/Card'
import './About.css'
import React from 'react'
import mern from "../../assets/mern.jpg"
import java from "../../assets/java.png"
import software from "../../assets/software.jpg"
const About = () => {
  return (
    <div id='about'>

      <div className="leftabout">

          <div className="circle-line">
            <div className="circle"></div>
            <div className="line" id='line1'></div>

            <div className="circle"></div>
            <div className="line" id='line2'></div>

            <div className="circle"></div>
        
            
          </div>
       
       <div className="aboutdetails">
        <div className="personalinfo">
          <h1>About</h1>
          <p>Hi! I’m <span >Sonu</span>, a passionate developer who enjoys turning ideas<br /> into interactive web  apps.
I work with the MERN stack and <br />love solving real-world problems through code.</p>
        </div>

        <div className="education">
  <h1>Education</h1>
  <p>
    🎓 <strong>MCA</strong> – 
    <a href="https://nitkkr.ac.in" target="_blank" rel="noopener noreferrer">
      NIT Kurukshetra
    </a> (2023–2026)
  </p>
  
  <p>
    🏫 
    <a href="https://www.bhu.ac.in" target="_blank" rel="noopener noreferrer">
     <strong>Banaras Hindu University (BHU)</strong> –  
    </a>(Dropped)
  </p>
  <p>
    📚 <strong>B.Sc. Mathematics</strong>  
    <a href="https://your-college-website.com" target="_blank" rel="noopener noreferrer">
  
    </a> BBAU,Muzaffarpur
  </p>
</div>


         <div className="skills">
  <h1>Skills</h1>
  <p>❖ <strong>Programming Languages:</strong> Java, JavaScript, SQL</p>
  <p>❖ <strong>Web Development:</strong> HTML5, CSS, React.js, Express.js, Node.js</p>
  <p>❖ <strong>Databases:</strong> MySQL, MongoDB</p>
  <p>❖ <strong>Other Skills:</strong> Problem Solving, Linux, GitHub, Bootstrap, Tailwind CSS</p>
</div>



       </div>

       
      </div>


{/* 
        right div start h yha se */}
      <div className="rightabout" >

       <Card title="WEB DEVELOPER" image ={mern}/>
       <Card title="JAVA " image={java}/>
       <Card title ="PROBLEM SOLVER" image={software}/>
      </div>

    </div>
  )
}

export default About