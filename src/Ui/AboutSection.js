import React from 'react';
import { Container, Row, Col } from "reactstrap";
import '../Style/AboutSection.css';
import aboutImg from '../assets/all-images/cars-img/bmw-offer.png'
const AboutSection = ({ aboutClass }) => {
    return (
        <section className='about_section' style={aboutClass === "aboutPage" ? { marginTop: "0px" } : { marginTop: "220px" }} >
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about_section_container">
                            <h4 className="section_subtitle ">About Us</h4>
                            <h2 className="section_title ">welcome to Rent Car Service</h2>
                            <p className="section_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem ad eos laborum harum numquam tempora natus iste temporibus enim voluptatem, optio itaque? Libero repellat, quae voluptates officia aliquid cum delectus!</p>

                            <div className="about_section_item d-flex align-items-center">

                                <p className="section_description d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet consectetur </p>
                                <p className="section_description d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet consectetur </p>

                            </div>
                            <div className="about_section_item d-flex align-items-center">

                                <p className="section_description d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet consectetur </p>
                                <p className="section_description d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet consectetur </p>

                            </div>
                        </div>

                    </Col>
                    <Col lg="6" md="6">
                        <div className="about_image">
                            <img src={aboutImg} className='w-100' alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default AboutSection;