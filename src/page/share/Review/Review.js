import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import reviewImg1 from '../../../images/img/review-1.jpg';
import reviewImg2 from '../../../images/img/review-2.jpg';
import reviewImg3 from '../../../images/img/review-3.jpg';
const Review = () => {
    const numberCounterHandler = () => {
        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current === end) {
                        clearInterval(timer);
                    }
                }, step);
        }
        counter("count1", 250, 400, 1000);
        counter("count2", 150, 35, 1000);
    };
    return (
        <div onMouseEnter={numberCounterHandler} style={{ backgroundColor: '#2b2b2b', color: '#e4e4e4', padding: '100px 0' }}>
            <div className="container" style={{ padding: '80px 0' }}>
                <div className="row">
                    <div className="col-md-6">
                        <h1 data-aos="fade-up" data-aos-duration="3000" style={{ fontWeight: 800, }}>
                            What our <br />
                            <span style={{ color: '#eb6434' }}>customers</span> say
                        </h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <h5 data-aos="fade-up" data-aos-duration="1500" style={{ color: '#eb6434' }}>
                            <FontAwesomeIcon icon={faStar} />  <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                        </h5>
                        <p data-aos="fade-up" data-aos-duration="3000">Average customer rating 4.82 (253 votes)</p>
                    </div>
                </div>
                <div style={{color: '#eb6434'}} className="row justify-content-center text-center mt-5 mb-2">
                    <div className="col-4">
                        <h1>Customers</h1>
                        <span id="count1" className="display-4">400</span><span className="display-4">+</span>
                    </div>
                    <div className="col-6">
                        <h1>Items</h1>
                        <span id="count2" className="display-4">35</span><span className="display-4">+</span>
                    </div>
                </div>

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <div style={{ padding: '60px 15px', textAlign: 'center' }}>
                            <img style={{ width: 150, height: 150, borderRadius: '50%', backgroundColor: 'gray', margin: 20 }} src={reviewImg1} alt="" />
                            <p>Lorem ipsum dolor, sit lorem, sed do eiusmod tempor incididunt utamet consectetur adipisicing elit. Exercitationem culpa sed reiciendis ea porro blanditiis laudantium rem delectus voluptatem! Reiciendis error architecto harum earum placeat.</p>
                            <h4 style={{ color: '#eb6434' }}>▪ ▪ ▪</h4>
                            <h5>Jenny Maze</h5>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <div style={{ padding: '60px 15px', textAlign: 'center' }}>
                            <img style={{ width: 150, height: 150, borderRadius: '50%', backgroundColor: 'gray', margin: 20 }} src={reviewImg2} alt="" />
                            <p>Lorem ipsum dolor, sit lorem, sed do eiusmod tempor incididunt utamet consectetur adipisicing elit. Exercitationem culpa sed reiciendis ea porro blanditiis laudantium rem delectus voluptatem! Reiciendis error architecto harum earum placeat.</p>
                            <h4 style={{ color: '#eb6434' }}>▪ ▪ ▪</h4>
                            <h5>Jenny Maze</h5>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ padding: '60px 15px', textAlign: 'center', }}>
                            <img style={{ width: 150, height: 150, borderRadius: '50%', backgroundColor: 'gray', margin: 20 }} src={reviewImg3} alt="" />
                            <p>Lorem ipsum dolor, sit lorem, sed do eiusmod tempor incididunt utamet consectetur adipisicing elit. Exercitationem culpa sed reiciendis ea porro blanditiis laudantium rem delectus voluptatem! Reiciendis error architecto harum earum placeat.</p>
                            <h4 style={{ color: '#eb6434' }}>▪ ▪ ▪</h4>
                            <h5>Jenny Maze</h5>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Review;