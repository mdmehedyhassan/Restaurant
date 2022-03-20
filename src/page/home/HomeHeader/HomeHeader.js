import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../../../images/img/bg-1.jpg';
import coverImg1 from '../../../images/img/cover-1.jpg';

const HomeHeader = () => {
    return (
        <div className="container">
            <div className="row p-3 align-items-center">
                <div className="col-md-6 mt-2">
                    <h1 data-aos="fade-up" data-aos-duration="1000" style={{ fontSize: 60, textShadow: '1px 1px 15px #eb6434, -1px -1px 15px #eb6434', color: 'black', }} className="fw-bolder">Chinese Restaurant</h1>
                    <p data-aos="fade-up" data-aos-duration="2000" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod adipisci nisi, cumque, earum vitae, repellat maiores tempore nemo voluptatem debitis assumenda? Itaque numquam aut expedita assumenda, hic vel aliquid.</p>
                    <Link data-aos="fade-up" data-aos-duration="3000" to="/menu" className="link-btn-style">
                        SEE THE MENU
                    </Link>

                </div>
                <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100%', padding: '20% 2px 12% 20%' }} className="col-md-6 mt-2">
                    <img style={{ width: '100%', borderRadius: 10 }} src={coverImg1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;