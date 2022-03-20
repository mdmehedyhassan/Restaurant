import React from 'react';
import coverImg6 from '../../../images/img/cover-6.jpg';

const ContactForm = () => {
    return (
        <div style={{ backgroundColor: '#fcf3dc', color: '#2b2b2b', padding: '80px 0' }}>
            <div className="container">
                <div className="mt-5 mb-5">
                    <h1 style={{ color: '#eb6434', fontSize: 60, fontWeight: 700, padding: '20px 0' }}>Visit Us</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="mt-2 mb-2 fw-bolder">BEWOO</h4>
                            <p>Studio 132 Everystreet</p>
                            <p>Manhatthan</p>
                            <p>NY 1234 USA</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="mt-2 mb-2 fw-bolder">HOURS</h4>
                            <p>Monday — Friday: 8AM — 4PM</p>
                            <p>Saturday: 10AM - 2PM</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="mt-2 mb-2 fw-bolder">PHONE</h4>
                            <h3>+880 1870 289 584</h3>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-7">
                        <h1 style={{ color: '#eb6434', fontSize: 60, fontWeight: 700, padding: '20px 0' }}>Write to us</h1>
                        <input type="text" className="form-control mt-2" placeholder="Name *" />
                        <input type="text" className="form-control mt-2" placeholder="Details" />
                        <textarea type="text" className="form-control mt-2" placeholder="Your Message" />
                        <button className="btn btn-outline-danger form-control mt-2">SEND THE MESSAGE</button>
                    </div>
                    <div className="col-md-5">
                        <img className="w-100" style={{borderRadius: 10}} src={coverImg6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;