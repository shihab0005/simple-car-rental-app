import React from 'react';
import Helmet from '../Components/Helmet/Helmet';
import HeroSlider from '../Ui/HeroSlider';
import { Container, Col, Row } from 'reactstrap';
import FindCarForm from '../Ui/FindCarForm';
import AboutSection from '../Ui/AboutSection';
import ServiceList from '../Ui/ServiceList';
import carData from '../assets/data/carData';
import CarItem from '../Ui/CarItem';
import BecomeDriverService from '../Ui/BecomeDriverService';
import Testimonial from '../Ui/Testimonial';
import BlogList from '../Ui/BlogList';


const Home = () => {
    return (
        <Helmet title="Home">
            {/* hero Section */}

            <section className="hero_slider_section p-0">
                <HeroSlider />
                <div className="hero_form">
                    <Container>
                        <Row className="form_row">
                            <Col lg='4' md="4">
                                <div className="find_car_left">
                                    <h2>Find Your Best Car Here</h2>
                                </div>
                            </Col>
                            <Col lg='8' md="8" sm='12'>

                                <FindCarForm />

                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/* about Section */}
            <AboutSection />

            {/* Service section */}
            <section>
                <Container>

                    <Row>
                        <Col lg="12" className='mb-5 text-center'>
                            <h6 className="section_subtitle">See Our</h6>
                            <h2 className="section_title">Popular Services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>


            {/* car offer section */}

            <section>
                <Container>

                    <Row>
                        <Col lg="12" className='mb-5 text-center'>
                            <h6 className="section_subtitle">Come With</h6>
                            <h2 className="section_title">Hot Offers</h2>
                        </Col>
                        {
                            carData.slice(0, 6).map(item => (
                                <CarItem item={item} key={item.id} />
                            ))
                        }
                    </Row>
                </Container>

            </section>

            {/* Become a Driver */}

            <BecomeDriverService />


            {/* testemonial section */}
            <section>
                <Container>

                    <Row>
                        <Col lg="12" className='mb-5 text-center'>
                            <h6 className="section_subtitle">Our Clients Says</h6>
                            <h2 className="section_title">Testemonial</h2>
                        </Col>
                        <Testimonial />
                    </Row>
                </Container>
            </section >

            {/* blog Section */}
            <section>
                <Container>

                    <Row>
                        <Col lg="12" className='mb-5 text-center'>
                            <h6 className="section_subtitle">Explore Our Blogs</h6>
                            <h2 className="section_title">Latest Blogs</h2>
                        </Col>
                        <BlogList />
                    </Row>
                </Container>
            </section >

        </Helmet>
    );
};

export default Home;