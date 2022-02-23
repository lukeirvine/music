import React from 'react';
import ComingSoon from '../../coming-soon/ComingSoon';
import NavBar from '../../nav-bar/NavBar';
import Footer from '../../footer/Footer';
import './Contact.css';
import { imgs } from './../../../resources/images';

const Contact = () => {

    return (
        <>
            <NavBar />
            <div className="ct-page">
                <img className="ct-hero-img" src={imgs.music.vespersPianoOverhead} alt="" />
                <div className="ct-avatar-container">
                    <div className="ct-avatar-wrapper">
                        <img className="ct-avatar" src={imgs.profile.haystack} alt="profile photo" />
                    </div>
                </div>
                <div className="ct-content-wrapper">
                    <div className="ct-content">
                        <h1 className="ct-title">
                            Contact
                        </h1>
                        <p className="ct-subtitle">
                            Have a question about lessons or want to contract me for a gig? I'd love to hear from you!
                        </p>
                        <p className="ct-email">
                            Shoot me an email at <a className="ct-link" href="mailto:lukeirvinemusic@gmail.com">lukeirvinemusic@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer className='c-footer' />
        </>
    )
}

export default Contact;