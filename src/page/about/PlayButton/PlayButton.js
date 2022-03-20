import React from 'react';
import playButton from '../../../images/img/play.png';
import backgroundImage2 from '../../../images/img/bg-2.jpg';

const PlayButton = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div style={{ padding: '40% 0', textAlign: 'center' }}>
                <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '100px', }} src={playButton} alt="" />
                </a>
            </div>
        </div>
    );
};

export default PlayButton;