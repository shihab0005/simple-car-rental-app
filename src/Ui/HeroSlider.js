import React from 'react';
import Slider from 'react-slick';
import { Container } from "reactstrap";
import { Link } from 'react-router-dom';
import '../Style/HeroSlider.css';

const HeroSlider = () => {
    const settings = {

        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 500,
        pushOnHover: false,
    };
    return (
        <Slider {...settings} className='hero_slider'>
            <div className="slider_item slider_item_01 mt-0">
                <Container>
                    <div className="slider_content">
                        <h4 className='text-light mb-3'>For Rent 70$ Per day</h4>
                        <h1 className='text-light mb-4'>Reserve Now And Get <br /> <span style={{ color: "#E0F71E" }}>50% OFF</span> </h1>
                        <button className="btn reserve_btn mt-4">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className="slider_item slider_item_02 mt-0">
                <Container>
                    <div className="slider_content">
                        <h4 className='text-light mb-3'>For Rent 70$ Per day</h4>
                        <h1 className='text-light mb-4'>Reserve Now And Get <br /> <span style={{ color: "#E0F71E" }}>50% OFF</span> </h1>
                        <button className="btn reserve_btn mt-4">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className="slider_item slider_item_03 mt-0">
                <Container>
                    <div className="slider_content">
                        <h4 className='text-light mb-3'>For Rent 70$ Per day</h4>
                        <h1 className='text-light mb-4'>Reserve Now And Get <br /> <span style={{ color: "#E0F71E" }}>50% OFF</span> </h1>
                        <button className="btn reserve_btn mt-4">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>
                </Container>
            </div>

        </Slider>
    );
};

export default HeroSlider;