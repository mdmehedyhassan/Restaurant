import React from 'react';
import Review from '../../share/Review/Review';
import GalleryMini from '../GalleryMini/GalleryMini';
import HomeExperience from '../HomeExperience/HomeExperience';
import HomeHeader from '../HomeHeader/HomeHeader';
import MenuMini from '../MenuMini/MenuMini';

const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <HomeExperience/>
            <MenuMini/>
            <GalleryMini/>
            <Review/>
        </div>
    );
};

export default Home;