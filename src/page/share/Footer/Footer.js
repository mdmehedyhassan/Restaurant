import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import brandImg1 from '../../../images/icon/brand-1.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#fcf3dc', color: '#2b2b2b', padding: '100px 0 20px 0' }}>
            <div className="container">
                <div className="row flex-row-reverse align-items-center">
                    <div className="col-md-4 text-center">
                        <img className="w-75" src={brandImg1} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h4 className="mb-4">BEWOO — Chinese restaurant</h4>
                        <p>Unusual food combining the best of Asian cuisine. The very first bite provides def real explosion of flavours. In addition, an always smiling and energetic crew that will answer all of your questions.</p>
                        <h2 style={{ color: '#eb6434', fontWeight: 700, padding: '20px 0' }}>+880 1870 289 584</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-between pt-5">
                    <p>© Md Mehedy Hassan. 2022</p>
                    <h2>
                        <a href="https://mehedy-portfolio.web.app/" target="_blank" rel="noopener noreferrer" className="p-2">
                            <FontAwesomeIcon icon={faUserTie}/>
                        </a>
                        <a href="https://www.linkedin.com/in/md-mehedy-hassan/" target="_blank" rel="noopener noreferrer" className="p-2">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="https://github.com/mdmehedyhassan" target="_blank" rel="noopener noreferrer" className="p-2">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href="https://www.facebook.com/mehedysr" target="_blank" rel="noopener noreferrer" className="p-2">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="https://twitter.com/MdMehedyHassa10" target="_blank" rel="noopener noreferrer" className="p-2">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;