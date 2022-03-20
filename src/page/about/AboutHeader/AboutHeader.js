import React from 'react';
import chefImg from '../../../images/img/chef.webp';

const AboutHeader = () => {
    return (
        <div style={{ backgroundColor: '#fcf3dc', color: '#2b2b2b', padding: '100px 0' }}>
            <div className="container">
                <h1 data-aos="fade-up" data-aos-duration="2000" style={{ color: '#eb6434', fontWeight: 700 }}>
                    We have over <br />
                    <span style={{ color: '#000' }}>15 years</span> of experience
                </h1>
                <div className="row">
                    <div style={{backgroundImage: `url(${chefImg})`, backgroundPosition: 'center', backgroundSize: 'cover', padding: '150px 0', borderRadius: 10}} className="col-md-6">
                    </div>
                    <div className="col-md-6">
                        <h4 data-aos="fade-up" data-aos-duration="500" style={{textAlign: 'justify', fontWeight: 600}}>Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</h4>
                        <p data-aos="fade-up" data-aos-duration="1500" style={{ textAlign: 'justify', margin: '35px 0'}}>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.</p>
                        <p data-aos="fade-up" data-aos-duration="2500" style={{ textAlign: 'justify', margin: '35px 0'}}>Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus.</p>
                        <p data-aos="fade-up" data-aos-duration="3000" style={{ textAlign: 'justify', margin: '35px 0'}}>Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;