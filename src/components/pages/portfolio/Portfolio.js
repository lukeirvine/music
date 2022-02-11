import React from 'react';
import NavBar from '../../nav-bar/NavBar';
import Footer from '../../footer/Footer';
import { imgs } from '../../../resources/images';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            <NavBar />
            <div className="apps-page">
                <img className="hero-img apps-hero" alt="" src={imgs.music.vespersOverhead} />
                <div className="apps-title-container">
                    <h1 className="apps-title"><i className="bi-music-note-beamed" />  Music Portfolio</h1>
                    <h2 className="apps-subtitle">Just a few snippets here and there</h2>
                </div>
                <div className="apps-content" >
                    <div className="app-container" id="goaltop-container">
                        <div className="app-name-container">
                            <i className="bi-layers app-icon" />
                            <h2 className="app-name">Jazz Trio Concert</h2>
                        </div>
                        <p className="app-dates">
                            January 2022
                        </p>
                        <div className="app-content">
                            <div className="app-demo-vid">
                                <div class='app-embed-container'>
                                <iframe 
                                    src="https://www.youtube.com/embed/87DU3thr9Dk" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                ></iframe>
                                </div>
                            </div>
                            <div className="app-description">
                                <p className="app-par">
                                    My freshman year of college I found myself surrounded by so many phenomenal musicians. Some of my 
                                    friends suggested I put on a concert and somehow I liked the idea and ran with it.  It was a 
                                    terrifying but greatly rewarding experience. The trio was made up of Wil Spears on drums, Luke 
                                    Thomas on bass, and myself on piano. We had several soloists join us including a saxophonist, vocalist, 
                                    and trumpeter, and it such a fun time playing with each of them. Here's one clip from that concert 
                                    featuring the great Nate Miller on trumpet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="survey-container">
                        <div className="app-name-container">
                            <i className="bi-brush app-icon" />
                            <h2 className="app-name">Saucy Keys Solo</h2>
                        </div>
                        <p className="app-dates">
                            June 2021
                        </p>
                        <div className="app-content">
                            <div className="app-demo-vid">
                                <div class='app-embed-container'>
                                    <iframe src="https://www.youtube.com/embed/a5u0OT-WhSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="app-description">
                                <p className="app-par">
                                    Each spring my college put on this fun little event called Spring Jam. A ton of students 
                                    would hang out on the green eating delicious food from the international food fair, playing 
                                    all kinds of summer games, and listening to great music from 4-5 student bands. This is a short 
                                    clip of the band I led, "Cliff Notes", named after our guitarist, Cliff. We're playing "Easy" by 
                                    Mac Ayres and I chose this clip because it's one of my favorite improv solos. For once I 
                                    actually let a melody take shape and didn't play too many notes! It was a beautiful little moment when 
                                    I really felt in the zone. Hope you enjoy this little snippet as much as I did.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container" id="smallgroups-container">
                        <div className="app-name-container">
                            <i className="bi-moon app-icon" />
                            <h2 className="app-name">Star Wars Medley</h2>
                        </div>
                        <p className="app-dates">
                            December 2020 - Present
                        </p>
                        <div className="app-content">
                            <div className="app-demo-vid">
                                <div class='app-embed-container'>
                                    <iframe src="https://www.youtube.com/embed/-XdWOMf4-5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="app-description">
                                <p className="app-par">
                                    Every once in a while you get lucky enough to put together some random cover or medley that makes 
                                    no sense, other than that it's really fun to play. At some point during my first few years of college 
                                    my jazz combo was asked to play for the "University Showcase" put on for all the high school students 
                                    visiting during the main recruitment weekend of the year. 
                                </p>
                                <p className="app-par">
                                    Recently we ran out of songs at a gig so we made up a groove that sounded a lot like 
                                    John Williams' "Duel of the Fates." So for this event we fleshed that idea out and added 
                                    a couple other Star Wars themes to make a medley of it. We tried to be sneaky with where we 
                                    brought the themes in at first, since the audience had no idea this was a Star Wars medley. When's 
                                    the first moment you spot the theme?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="goaltop-container">
                        <div className="app-name-container">
                            <i className="bi-door-open-fill app-icon" />
                            <h2 className="app-name">Surprise Walk-on Gig</h2>
                        </div>
                        <p className="app-dates">
                            October 2021 - present
                        </p>
                        <div className="app-content">
                            <div className="app-demo-vid">
                                <div class='app-embed-container'>
                                <iframe src="https://www.youtube.com/embed/o3Fr2RZzw4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            </div>
                            <div className="app-description">
                                <p className="app-par">
                                    I was home for a couple weeks and itching to gig with my friend Nate Miller on trumpet again. 
                                    It was short notice so we decided to grab Ivan Danilich on guitar and just busk in downtown 
                                    Walla Walla. However, the corner we were planning on playing at had another musician playing 
                                    outside next door. We packed up mere moments after arriving, feeling quite bummed. 
                                    But then the owner of another winery a couple doors the other way walked up and asked 
                                    why we were leaving so soon. We pointed to the live music and she promptly invited us 
                                    to play on the patio of her winery. 
                                </p>
                                <p className="app-par">
                                    We were excited for a place to play, but weren't expecting much of a turnout since it was as 
                                    last minute as can be. We didn't care; we were just excited to jam together again. 
                                    Much to our surprise, we ended up packing out the venue's outdoor seating area and had such 
                                    a good time with everyone who stopped to listen. Sometimes the best gigs are just fun 
                                    music with fun company, no matter where you are.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container" id="goaltop-container">
                        <div className="app-name-container">
                            <i className="bi-lightning-fill app-icon" />
                            <h2 className="app-name">Battle of the Bands</h2>
                        </div>
                        <p className="app-dates">
                            February 2020
                        </p>
                        <div className="app-content">
                            <div className="app-demo-vid">
                                <div class='app-embed-container'>
                                <iframe src="https://www.youtube.com/embed/OAVveZiTx5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            </div>
                            <div className="app-description">
                                <p className="app-par">
                                    Perhaps the crown of all student events at Walla Walla University is Battle of the Bands. 
                                    Each year 4-5 student bands prepare 20-minute sets full of hit songs and gimmicks hoping they'll 
                                    win it all. This is a clip of one of the songs from my set Junior year. The crowd was electric and 
                                    100% responsive, no matter how good or bad we were. At the end of the day, we were all just stoked 
                                    to be going absolutely nuts with our friends, supporting our friends' music. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container app-dark" id="meal-container">
                        <div className="app-name-container">
                            <i className="bi-camera-video app-icon" />
                            <h2 className="app-name">Covid Who?</h2>
                        </div>
                        <p className="app-dates">
                            May 2020
                        </p>
                        <div className="app-content">
                            <div className="app-demo-vid">
                                <div class='app-embed-container'>
                                    <iframe src="https://www.youtube.com/embed/ccshOf2AGvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="app-description">
                                <p className="app-par">
                                    The last two years of my college experience I was cursed with the title of "Assistant Chaplain of 
                                    Music," meaning I was in charge of all the worship music that happened on campus. It was a 
                                    phenomenal experience, don't get me wrong, but I say cursed because it was around the same time 
                                    COVID-19 struck. None of our worship programs could happen since we were all sent home to conintue 
                                    our schooling online, which ironically meant more work for me, trying to keep a worship  
                                    culture alive online.
                                </p>
                                <p className="app-par">
                                    I had the idea of putting together a full worship set of 4 songs in the format you see in this clip 
                                    here. It was a ton of fun to put together and a great learning experience, but also way harder 
                                    than I ever thought possible. In fact, this project was actually the cause of my first college all-nighter. 
                                    Regardless of its quality (I'll let you be the judge), it's a project I'm immensely proud of because 
                                    it gave people the smallest semblance of normalcy in the midst of a chaotic time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-container" id="meal-container">
                        <div className="app-name-container">
                            <i className="bi-camera-video app-icon" />
                            <h2 className="app-name">Covid Who Part 2</h2>
                        </div>
                        <p className="app-dates">
                            February 2020
                        </p>
                        <div className="app-content">
                            <div className="app-demo-vid">
                                <div class='app-embed-container'>
                                    <iframe src="https://www.youtube.com/embed/ABDGISMRWx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="app-description">
                                <p className="app-par">
                                    This is another clip from that COVID project highlighted above. I'm also proud of this 
                                    song and how it turned out musically, but the mixing turned out to be quite a challenge 
                                    because of everyone's different home-recording setups. I had to tweak tons of parameters 
                                    and the vocals still wound up sounding a little funny - no fault of Audrey's, her voice 
                                    still sounds incredible in spite of it. No matter how it wound up sounding, this project 
                                    was a great deal of fun and something I cherish coming out of the pandemic. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Portfolio;