import React from "react";
import NavBar from "../../nav-bar/NavBar";
import ComingSoon from "../../coming-soon/ComingSoon";
import Footer from "../../footer/Footer";
import Hero from "../../hero/Hero";
import { imgs } from "../../../resources/images";
import "./Lessons.css";

const Lessons = () => {
  return <>
    <NavBar />
    <div className="lsn-page">
      <Hero
        url={imgs.music.botb}
        title={<><i className="bi-music-note-beamed" /> Piano Lessons</>}
        subtitle={<>Learn to express your passion</>}
        imgPos="0px -180px"
        opacity="0.5"
      />
      <div className="lsn-content">
      </div>
    </div>
    <Footer className='c-footer' />
  </>;
};

export default Lessons;
