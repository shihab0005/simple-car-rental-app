import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import '../../Style/Footer.css';

const quickLink = [
    {
        path: "/about",
        display: "About"
    },
    {
        path: "#",
        display: "Privacy Policy"
    },
    {
        path: "/cars",
        display: "Car Listing"
    },
    {
        path: "/blogs",
        display: "Blog"
    },
    {
        path: "/contact",
        display: "Contact"
    },


]
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12">
                        <div className="logo footer_logo">
                            <h1>
                                <Link to="/home" className='d-flex align-items-center gap-1'>
                                    <i className="ri-car-line"></i>
                                    <span>Rent Car <br />Service</span>
                                </Link>
                            </h1>
                        </div>
                        <p className="footer_logo_contain">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam at dicta quo neque aliquam ipsam tenetur accusamus iste! Tenetur itaque impedit quia eligendi sed? Consequatur perspiciatis explicabo sit placeat.
                        </p>
                    </Col>

                    <Col lg="2" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className='footer_link_title'>Quick Links</h5>
                            <ListGroup>
                                {quickLink.map((item, index) => (
                                    <ListGroupItem className='p-0 mt-3 quick_link' key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className='footer_link_title mb-4'>Head Office</h5>
                            <p className="office_info">
                                Boalder-1204 ,Hakimpur ,Dinajpur,<br />Bangladesh
                            </p>
                            <p className="office_info">
                                Phone : +88067799944
                            </p>
                            <p className="office_info">
                                Email : shihab157394@gmail.com
                            </p>
                            <p className="office_info">
                                Office Time : 10am - 7pm
                            </p>
                        </div>
                    </Col>
                    <Col lg="3" md="4">

                        <h5 className='footer_link_title'>Newsletter</h5>
                        <p className="section_description">
                            Subscribe Our Newsletter
                        </p>
                        <div className="newsletter">
                            <input type="email" placeholder='Email' />
                            <span><i className="ri-send-plane-line"></i></span>
                        </div>
                    </Col>
                    <Col lg="12">
                        <div className="footer_bottom d-flex justify-content-center align-items-center">
                            <p className="section_description pt-3">
                                <i class="ri-copyright-line"></i>
                                Copyright {year},Developed By Shihab Khan.All right Reserved.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;