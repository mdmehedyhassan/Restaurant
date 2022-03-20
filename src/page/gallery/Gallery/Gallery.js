import React from 'react';
import Book from '../../share/Book/Book';
import GalleryPic from '../GalleryPic/GalleryPic';

const Gallery = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h1 style={{ fontWeight: 700, fontSize: 70 }}>Gallery</h1>
            </div>
            <GalleryPic/>
            <Book/>
        </div>
    );
};

export default Gallery;