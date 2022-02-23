import React from "react";
import NavBar from "../../nav-bar/NavBar";
import ComingSoon from "../../coming-soon/ComingSoon";
import Footer from "../../footer/Footer";
import Hero from "../../hero/Hero";
import { Button } from "react-bootstrap";
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
        imgPos="0px -150px"
        opacity="0.5"
      />
      <div className="lsn-content-container">
        <div className="lsn-content">
          <h3 className="lsn-h3 lsn-text-center">Now offering online lessons and in-person lessons near Redlands, CA</h3>
          <div className="lsn-description-container">
            <p className="lsn-description lsn-text">
              Learn to sit down and play whatever you want without stressing needlessly over every note on a page.
            </p>
            <p className="lsn-description lsn-text">
              Learn a functional approach to piano based on age-old theory and practices boiled down to easy tips
              and tricks designed to have you playing your favorite songs in no time.
            </p>
            <p className="lsn-description lsn-text">
              Learn jazz comping and improvisation, timeless classical pieces, or your favorite pop tunes.
            </p>
          </div>
          <p className="lsn-demographic lsn-text-center">
            Accepting students ages 6 and up of all skill levels.
          </p>
          <p className="lsn-thumbtack lsn-text-center">
            Connect with me on Thumbtack to start your musical journey today.
          </p>
          <div className="lsn-btn-wrapper">
            <Button variant="info" className="lsn-btn" target="_blank" href="https://www.thumbtack.com/ca/loma-linda/piano-lessons-for-kids/luke-irvine-music/service/442955119166291986">
              Connect on Thumbtack <i className="bi-box-arrow-right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer className='c-footer' />
  </>;
};

export default Lessons;
