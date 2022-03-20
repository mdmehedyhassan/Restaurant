import React from 'react';
import coverImg6 from '../../../images/img/cover-6.jpg';

const ContactForm = () => {
    return (
        <div style={{ backgroundColor: '#fcf3dc', color: '#2b2b2b', padding: '80px 0' }}>
            <div className="container">
                <div className="mt-5 mb-5">
                    <h1 data-aos="fade-up" data-aos-duration="1000" style={{ color: '#eb6434', fontSize: 60, fontWeight: 700, padding: '20px 0' }}>Visit Us</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 data-aos="fade-up" data-aos-duration="1500" className="mt-2 mb-2 fw-bolder">BEWOO</h4>
                            <p data-aos="fade-up" data-aos-duration="2000">Studio 132 Everystreet</p>
                            <p data-aos="fade-up" data-aos-duration="2500">Manhatthan</p>
                            <p data-aos="fade-up" data-aos-duration="3000">NY 1234 USA</p>
                        </div>
                        <div className="col-md-4">
                            <h4 data-aos="fade-down" data-aos-duration="1000" className="mt-2 mb-2 fw-bolder">HOURS</h4>
                            <p data-aos="fade-down" data-aos-duration="2000">Monday — Friday: 8AM — 4PM</p>
                            <p data-aos="fade-down" data-aos-duration="3000">Saturday: 10AM - 2PM</p>
                        </div>
                        <div className="col-md-4">
                            <h4 data-aos="fade-up" data-aos-duration="1500" className="mt-2 mb-2 fw-bolder">PHONE</h4>
                            <h3 data-aos="fade-up" data-aos-duration="3000" style={{color: '#eb6434', fontWeight: 700}}>+880 1870 289 584</h3>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-5 mb-5">
                    <div className="col-md-7">
                        <h1 data-aos="fade-up" data-aos-duration="1000" style={{ color: '#eb6434', fontSize: 60, fontWeight: 700, padding: '20px 0' }}>Write to us</h1>
                        <input data-aos="fade-up" data-aos-duration="1500" type="text" className="form-control mt-2" placeholder="Name *" />
                        <input data-aos="fade-up" data-aos-duration="2000" type="text" className="form-control mt-2" placeholder="Details" />
                        <textarea data-aos="fade-up" data-aos-duration="2500" type="text" className="form-control mt-2" placeholder="Your Message" />
                        <button data-aos="fade-up" data-aos-duration="3000" className="btn btn-outline-danger form-control mt-2 mb-2">SEND THE MESSAGE</button>
                    </div>
                    <div className="col-md-5 img-wrapper">
                        <img data-aos="flip-up" data-aos-duration="2000" className="w-100 inner-img" style={{ borderRadius: 10 }} src={coverImg6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;