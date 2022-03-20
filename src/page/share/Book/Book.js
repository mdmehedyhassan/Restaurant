import React from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
    return (
        <div className="container" style={{ padding: '80px 15%', textAlign: 'center' }}>
            <h5 data-aos="fade-up" data-aos-duration="500">RESERVATION</h5>
            <h1 data-aos="fade-up" data-aos-duration="1500"><span style={{ color: '#eb6434', fontWeight: 700 }}>Book</span> a table</h1>
            <p data-aos="fade-up" data-aos-duration="2500">Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend.</p>
            <div data-aos="fade-up" data-aos-duration="3000" className="mt-5 mb-3">
                <Link to="/contact" className="link-btn-style">
                    MAKE A RESERVATION
                </Link>
            </div>
        </div>
    );
};

export default Book;