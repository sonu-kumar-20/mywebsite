import React, { useRef } from 'react';
import './Nav.css'
import {Link} from "react-scroll"
const Nav = () => {
  let menu = useRef()
  let mobile = useRef()
  
  return (
    <nav>
    <h1> Let's build something amazing </h1>


      <ul className='desktopmenu'>

        <Link to="home" activeClass='active' spy={true}  smooth={true} duration={500}>   <li>Home </li> </Link>
     
       <Link to="about"  activeClass='active'  spy={true}   smooth={true} duration={500} >  <li>About </li></Link>
       <Link to="project" activeClass='active' spy={true}   smooth={true} duration={500}>  <li>Project </li></Link>
        <Link to="contact" activeClass='active' spy={true}  smooth={true} duration={500}>  <li>Contact </li></Link>

        
      
        
      </ul>

       
       <div className='hamburger' ref={menu} onClick={()=>{
          mobile.current.classList.toggle("activemobile")
           menu.current.classList.toggle("activeham") 
       }}>
        <div className="ham"></div>
         <div className="ham"></div>
          <div className="ham"></div>
       </div>
      <ul className='mobilemenu' ref={mobile}>

        <Link to="home" activeClass='active' spy={true}  smooth={true} duration={500}>   <li>Home </li> </Link>
     
       <Link to="about"  activeClass='active'  spy={true}   smooth={true} duration={500} >  <li>About </li></Link>
       <Link to="project" activeClass='active' spy={true}   smooth={true} duration={500}>  <li>Project </li></Link>
        <Link to="contact" activeClass='active' spy={true}  smooth={true} duration={500}>  <li>Contact </li></Link>

        
      
        
      </ul> 
    </nav>
  )
}

export default Nav