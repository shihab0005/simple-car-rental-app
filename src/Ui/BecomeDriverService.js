import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../Style/BecomeDriverService.css';
import driverImg from "../assets/all-images/toyota-offer-2.png";

const BecomeDriverService = () => {
    return (
        <section className='become_driver'>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <img src={driverImg} alt="" className='w-100' />
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <h2 className='section_title become_driver_title'>Do You Want To Earn With Us? SO DOn't Be Late</h2>
                        <button className="btn become_driver_btn mt-4">Become A Driver</button>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default BecomeDriverService;