import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import PlayButton from '../PlayButton/PlayButton';
import Review from '../../share/Review/Review';

const About = () => {
    return (
        <div>
            <AboutHeader/>
            <PlayButton/>
            <Review/>
        </div>
    );
};

export default About;