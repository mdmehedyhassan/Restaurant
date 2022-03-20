import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import PlayButton from '../PlayButton/PlayButton';
import Review from '../../share/Review/Review';

const About = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h1 data-aos="fade-up" data-aos-duration="2000" style={{ fontWeight: 700, fontSize: 70 }}>About Us</h1>
            </div>
            <AboutHeader/>
            <PlayButton/>
            <Review/>
        </div>
    );
};

export default About;