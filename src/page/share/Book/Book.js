import React from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
    return (
        <div className="container" style={{ padding: '80px 15%', textAlign: 'center' }}>
            <h5>RESERVATION</h5>
            <h1><span style={{ color: '#eb6434', fontWeight: 700 }}>Book</span> a table</h1>
            <p>Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend.</p>
            <div className="mt-5 mb-3">
                <Link to="/contact" className="link-btn-style">
                    MAKE A RESERVATION
                </Link>
            </div>
        </div>
    );
};

export default Book;