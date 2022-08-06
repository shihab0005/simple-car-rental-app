import React from 'react';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Ui/CommonSection';
import '../Style/Contact.css'
const Contact = () => {
    return (
        <Helmet title={Contact}>
            <CommonSection title='Contact Us' />
            <section>
                <Container>
                    <Row>
                        <Col lg="7" md="7">
                            <h5 className='fw-bolder mb-3'>GET IN TOUCH</h5>
                            <Form>
                                <FormGroup className='contact_form'>
                                    <Input type='text' placeholder='Your Name' />
                                </FormGroup>
                                <FormGroup className='contact_form'>
                                    <Input type='email' placeholder='Your Email' />
                                </FormGroup>
                                <FormGroup className='contact_form'>
                                    <textarea type='text' className='textarea'
                                        rows={5} placeholder='Message' />
                                </FormGroup>
                                <button type="submit" className='contact_btn'>Send</button>
                            </Form>
                        </Col>
                        <Col lg='5' md="5">
                            <div className="contact_info">
                                <h6 className='fw-bolder fs-4'>Contact Information</h6>
                                <p className="section_descriptio">
                                    1200-Hakimpur,Dinajpur,Bangladesh.
                                </p>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className='mb-0 fs-5 fw-bold'>Phone :</h6>
                                    <p className="section_description mb-0">+0888-05556498</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className='mb-0 fs-5 fw-bold'>Email :</h6>
                                    <p className="section_description mb-0">example@gmail.com</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className='mb-0 fs-5 fw-bold'>Follow Us</h6>
                                    <span className="section_description mb-0">
                                        <i className="ri-facebook-line"></i>
                                        <i className="ri-linkedin-line"></i>
                                        <i class="ri-twitter-line"></i>
                                    </span>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;