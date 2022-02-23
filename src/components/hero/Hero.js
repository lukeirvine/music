import React from "react";
import './Hero.css';

/*
    Props:
    - url         
        - url for background img
    - imgPos      
        - String of format '0px 0px' detailing background img position
        - Only kicks in for screen size greater than 767px
    - opacity
        - ranges from 0 to 1
        - opacity of the background image with a black background
    - title       
        - Hero title
    - subtitle    
        - Hero Subtitle
*/
const Hero = props => {
    const { url, title, subtitle } = props;
    let imgPos = props.imgPos === undefined ? '' : props.imgPos;
    let opacity = props.opacity === undefined ? '' : props.opacity;

    console.log(window.screen.width)

    return <>
        <div className="hero-img hero-screen"></div>
        <img 
            className="hero-img" 
            alt="" 
            src={url} 
            style={{
                objectPosition: window.screen.width > 767 ? imgPos : 'auto',
                opacity: opacity
            }}
        />
        <div className="hero-title-container">
            <h1 className="hero-title">{title}</h1>
            <h2 className="hero-subtitle">{subtitle}</h2>
        </div>
    </>
}

export default Hero