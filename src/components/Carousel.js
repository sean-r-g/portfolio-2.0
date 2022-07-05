import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const projectPics = [
    'https://i.imgur.com/4Jx6dOa.png',
    'https://i.imgur.com/thrO43y.png',
    'https://i.imgur.com/5NpZDX2.png',
    'https://i.imgur.com/ik3psxo.png',
    'https://i.imgur.com/ZqqLFHX.png',
    'https://i.imgur.com/rqroBlG.png'
]   

const HeroSlider = (props) => {
    const [index, setIndex] = useState(0);
    let length = projectPics.length;

    const handleSelect = (selectedIndex, event) => {
        setIndex(selectedIndex);
    };
  
    return (
    <div className="carousel-main-div">
        <Carousel fade id='carousel' activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        {projectPics.map((picture, index) => {
            return (
            <Carousel.Item key={picture.indexOf()}>
                <div className='carousel-card'>
                {/* <h2 className="center-text display-4" id='slide-title'>
                    {guides.title}
                </h2> */}
                <img src={picture}/>
                </div>
            </Carousel.Item>
            );
        })}
        </Carousel>
    </div>
  );
};

export default HeroSlider