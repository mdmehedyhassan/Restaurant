import React from 'react';
import itemImg5 from '../../../images/img/item-5.jpg';
import itemImg6 from '../../../images/img/item-6.jpg';
import itemImg7 from '../../../images/img/item-7.jpg';
import itemImg8 from '../../../images/img/item-8.jpg';
import itemImg9 from '../../../images/img/item-9.jpg';
import itemImg10 from '../../../images/img/item-10.jpg';
import itemImg11 from '../../../images/img/item-11.jpg';
import itemImg12 from '../../../images/img/item-12.jpg';
import itemImg13 from '../../../images/img/item-13.jpg';

const imageArray = [itemImg5, itemImg6, itemImg7, itemImg8, itemImg9, itemImg10, itemImg11, itemImg12, itemImg13]

const GalleryPic = () => {
    return (
        <div style={{ backgroundColor: '#fcf3dc', color: '#2b2b2b', padding: '100px 0' }}>
            <div className="container mt-5 mb-5">
                <div className="row">
                    {
                        imageArray.map((img, index) => <div key={index} img={img} className="col-xl-4 col-sm-6 col-12">
                            <div className="img-wrapper m-2">
                                <img data-aos="flip-left" data-aos-duration="2000" className="inner-img w-100" src={img} alt="" />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default GalleryPic;