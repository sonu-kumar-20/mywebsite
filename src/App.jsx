import { useState } from 'react'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact  from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
function App() {
 

  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Skills/>
     
    </>
  )
}

export default App
