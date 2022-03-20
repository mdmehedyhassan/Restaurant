import React from 'react';
import Review from '../../share/Review/Review';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h1 style={{ fontWeight: 700, fontSize: 70 }}>Contact us</h1>
            </div>
            <ContactForm/>
            <Review/>
        </div>
    );
};

export default Contact;