import React from 'react';
import NavBar from './../../nav-bar/NavBar';
import Background from './components/Background';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Homepage2.css'
import { imgs } from '../../../resources/images';

const Homepage = () => {
    return (
        <>
            <div className="hp2-page">
                <Background />
                <div className="hp2-content-wrapper">
                    <div className="hp2-content">
                        <div className="hp2-avatar-wrapper">
                            <img
                                className="hp2-avatar"
                                alt="avatar"
                                src={imgs.profile.haystack}
                            />
                        </div>
                        <h1 className="page-title">Luke Irvine Music</h1>
                        <div className="hp2-identity">
                            <h2 className="hp2-identity-item">Clasically trained, </h2>
                            <h2 className="hp2-identity-item">Jazz enthusiast, </h2>
                            <h2 className="hp2-identity-item">Piano Instructor and Performer</h2>
                        </div>
                        <p className="hp2-tagline">
                            I spread the joy of music to others through electric performances
                            and passionate piano instruction focusing on easy essentials to get
                            students playing as quickly as possible.
                        </p>
                        <div className="hp2-link-container">
                            <Button
                                variant="light"
                                className="hp2-link-btn"
                                as={ Link }
                                to="/portfolio"
                            >
                                <i className='bi-music-note-beamed' />
                                <span className="hp2-link-btn-text">Portfolio</span>
                            </Button>
                            <Button
                                variant="light"
                                className="hp2-link-btn"
                                as={ Link }
                                to="/lessons"
                            >
                                <i className='bi-book' />
                                <span className="hp2-link-btn-text">Lessons</span>
                            </Button>
                            <Button
                                variant="light"
                                className="hp2-link-btn"
                                as={ Link }
                                to="/contact"
                            >
                                <i className='bi-chat-dots' />
                                <span className="hp2-link-btn-text">Contact</span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <Footer className="hp2-footer" /> */}
            </div>
        </>
    )
}

export default Homepage;