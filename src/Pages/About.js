import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import AboutSection from '../Ui/AboutSection';
import CommonSection from '../Ui/CommonSection';
import driverImg from '../assets/all-images/drive.jpg';
import BecomeDriverService from '../Ui/BecomeDriverService';
import OurMember from '../Ui/OurMember';

const About = () => {
    return (
        <Helmet title="About">
            <CommonSection title="About Us" />
            <AboutSection aboutClass="aboutPage" />
            <section className="about_page_section">
                <Container>
                    <Row className='d-flex justify-content-center align-items-center '>
                        <Col lg="6" md="6" sm="12">
                            <div className="about_page_img">
                                <img src={driverImg} alt="" className='w-100 rounded-3' />
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="about_page_content">
                                <h2 className="section_title">
                                    We Are Commited To Provide Safe Ride Solutions
                                </h2>
                                <p className="section_description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus voluptas reprehenderit. Accusamus vero nulla reprehenderit illum id deserunt quia dolores nobis temporibus, veritatis eos explicabo nihil beatae velit delectus?
                                </p>
                                <p className="section_description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus voluptas reprehenderit. Accusamus vero nulla reprehenderit illum id deserunt quia dolores nobis temporibus, veritatis eos explicabo nihil beatae velit delectus?
                                </p>
                                <div className="d-flex align-items-center gap-3 mt-4">
                                    <span><i className="ri-phone-line fs-4"></i></span>
                                    <div className="">
                                        <h6 className='section_subtitle'>Need Any Help?</h6>
                                        <h4>+009119993344</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <BecomeDriverService />
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-5 text-center'>
                            <h6 className="section_subtitle">Experts</h6>
                            <h2 className="section_title">Our Expert Members</h2>
                        </Col>
                        <OurMember />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default About;