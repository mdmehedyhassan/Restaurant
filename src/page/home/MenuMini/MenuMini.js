import React from 'react';
import icon1 from '../../../images/icon/icon-1.png';
import icon2 from '../../../images/icon/icon-2.png';
import icon3 from '../../../images/icon/icon-3.png';
import icon4 from '../../../images/icon/icon-4.png';
import icon5 from '../../../images/icon/icon-5.png';
import icon6 from '../../../images/icon/icon-6.png';
import cover4 from '../../../images/img/cover-4.jpg';
import brand1 from '../../../images/icon/brand-1.png';
import { Link } from 'react-router-dom';

const MenuMini = () => {
    return (
        <div style={{ backgroundColor: '#fcf3dc', color: '#2b2b2b', padding: '100px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7" style={{ padding: '100px 10px 190px' }}>
                        <h1 data-aos="fade-down" data-aos-duration="1000" style={{ color: '#eb6434', fontWeight: 700 }}>Menu</h1>
                        <h5 data-aos="fade-down" data-aos-duration="2000" className="fw-bolder mt-3 mb-3">Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</h5>
                        <p data-aos="fade-down" data-aos-duration="3000" style={{ textAlign: 'justify', margin: '30px 0 65px 0' }}>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.</p>
                        <div className="row">
                            <div className="col-md-6 mt-2">
                                <div style={{ borderBottom: '1px solid #8080804b', margin: '10px 0', padding: '10px 0' }} className="row align-items-center">
                                    <div className="col-4">
                                        <img  data-aos="fade-up" data-aos-duration="1000" className="w-100" src={icon1} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h3 data-aos="fade-up" data-aos-duration="2000" className="fw-bolder">SOUPS</h3>
                                        <p data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div style={{ borderBottom: '1px solid #8080804b', margin: '10px 0', padding: '10px 0' }} className="row align-items-center">
                                    <div className="col-4">
                                        <img data-aos="fade-up" data-aos-duration="1000" className="w-100" src={icon2} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h3 data-aos="fade-up" data-aos-duration="2000" className="fw-bolder">DUMPLINGS</h3>
                                        <p data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-2">
                                <div style={{ borderBottom: '1px solid #8080804b', margin: '10px 0', padding: '10px 0' }} className="row align-items-center">
                                    <div className="col-4">
                                        <img data-aos="fade-up" data-aos-duration="1000" className="w-100" src={icon3} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h3 data-aos="fade-up" data-aos-duration="2000" className="fw-bolder">SPRING ROLLS</h3>
                                        <p data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div style={{ borderBottom: '1px solid #8080804b', margin: '10px 0', padding: '10px 0' }} className="row align-items-center">
                                    <div className="col-4">
                                        <img data-aos="fade-up" data-aos-duration="1000" className="w-100" src={icon4} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h3 data-aos="fade-up" data-aos-duration="2000" className="fw-bolder">DIM SUM</h3>
                                        <p data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-2">
                                <div style={{ borderBottom: '1px solid #8080804b', margin: '10px 0', padding: '10px 0' }} className="row align-items-center">
                                    <div className="col-4">
                                        <img data-aos="fade-up" data-aos-duration="1000" className="w-100" src={icon5} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h3 data-aos="fade-up" data-aos-duration="2000" className="fw-bolder">NOODLES</h3>
                                        <p data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2">
                                <div style={{ borderBottom: '1px solid #8080804b', margin: '10px 0', padding: '10px 0' }} className="row align-items-center">
                                    <div className="col-4">
                                        <img data-aos="fade-up" data-aos-duration="1000" className="w-100" src={icon6} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h3 data-aos="fade-up" data-aos-duration="2000" className="fw-bolder">RICE</h3>
                                        <p data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5" style={{ marginTop: -180 }}>
                        <div className="img-wrapper">
                            <img data-aos="fade-down" data-aos-duration="1500" className="w-100 inner-img" style={{ borderRadius: 10 }} src={cover4} alt="" />
                        </div>
                        <img data-aos="fade-up" data-aos-duration="2500" className="w-100 p-4" src={brand1} alt="" />
                        <div data-aos="fade-up" data-aos-duration="3000" className="text-center">
                            <Link to="/menu" className="link-btn-style mt-5">
                                SEE THE FULL MENU
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuMini;