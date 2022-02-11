import React from "react";
import NavBar from "../../nav-bar/NavBar";
import ComingSoon from "../../coming-soon/ComingSoon";
import Footer from "../../footer/Footer";
import "./Lessons.css";

const Lessons = () => {
  return <>
    <NavBar />
    <ComingSoon 
      title={<>
        <i className="bi-people" /> Lessons
      </>}
      bg='linear-gradient(rgb(116, 120, 182), rgb(62, 58, 83))'
    />
    <Footer className='c-footer' />
  </>;
};

export default Lessons;
