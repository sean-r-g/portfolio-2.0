import './App.css';
import {useState, useEffect} from 'react'
import NavBar from './components/Nav';
import HeroSlider from './components/Carousel';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Icons from './components/Icons';


function App() {

  // const [showAbout, setShowAbout] = useState(true)
  // const [showHome, setShowHome] = useState(true)
  
  // const handleShowHome = () => {
  //   setShowAbout(false)
  //   setShowHome(true)
  // }
  // const handleShowAbout = () => {
  //   setShowAbout(true)
  //   setShowHome(false)
  // }
  

  return (
    <body>
    <head>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    </style>
    </head>
      <NavBar/>
      <div id='home'></div>
      <section>
        <Intro/>
        <div id='about'></div>
        <About/>
        <div id='projects'></div>
        <HeroSlider/>
        <Projects/>
      </section>
    </body>
  )
}

export default App;
