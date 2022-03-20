import React from 'react';
import { Link } from 'react-router-dom';
import cover5 from '../../../images/img/cover-5.jpg';

const GalleryMini = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <h1 className="fw-bolder">Gallery</h1>
                    <h5 className="fw-bolder">Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus.</h5>
                    <p style={{ textAlign: 'justify', margin: '35px 0' }}>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices.</p>
                    <div className="mb-3">
                        <Link to="/gallery" className="link-btn-style">
                            OUR GALLERY
                        </Link>
                    </div>
                </div>
                <div className="col-md-7">
                    <img className="w-100" style={{ borderRadius: 10 }} src={cover5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GalleryMini;