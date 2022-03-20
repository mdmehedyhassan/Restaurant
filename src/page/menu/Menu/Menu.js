import React from 'react';
import Book from '../../share/Book/Book';
import MenuDetails from '../MenuDetails/MenuDetails';

const Menu = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h1 data-aos="fade-up" data-aos-duration="2000" style={{ fontWeight: 700, fontSize: 70 }}>Main menu</h1>
            </div>
            <MenuDetails/>
            <Book/>
        </div>
    );
};

export default Menu;