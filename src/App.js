import './App.css';
import {useState, useEffect} from 'react'
import NavBar from './components/Nav';
import HeroSlider from './components/Carousel';
import About from './About';

function App() {

  const [showAbout, setShowAbout] = useState(false)
  const [showHome, setShowHome] = useState(true)
  
  const handleShowHome = () => {
    setShowAbout(false)
    setShowHome(true)
  }
  const handleShowAbout = () => {
    setShowAbout(true)
    setShowHome(false)
  }
  

  return (
    <>
    <head>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
    </style>
    </head>
      <NavBar handleShowHome={handleShowHome} handleShowAbout={handleShowAbout}/>
      <section>
        {showHome ? <HeroSlider/> : null}
        {showAbout ? <About/> : null}
      </section>
    </>
  )
}

export default App;
