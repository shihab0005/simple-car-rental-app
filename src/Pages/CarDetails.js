import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import carData from '../assets/data/carData';
import Helmet from '../Components/Helmet/Helmet';
import BookingForm from '../Ui/BookingForm';
import PaymentMethod from '../Ui/PaymentMethod';

const CarDetails = () => {
    const { slug } = useParams();
    //console.log(slug)
    const singleCarItem = carData.find((item) => item.carName === slug);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [singleCarItem]);

    return (
        <Helmet >
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={singleCarItem.imgUrl} className="w-100" alt="" />
                        </Col>
                        <Col lg="6">
                            <div className="car_info">
                                <h2 className='section_title'>{singleCarItem.carName}</h2>

                                <div className="d-flex align-items-center gap-5 mt-3">
                                    <h6 className="rent_price fw-bolder fs-4">${singleCarItem.price}.00 /Day</h6>
                                    <div className="d-flex align-items-center gap-2">
                                        <span style={{ color: "#f9a826" }}>
                                            <i className="ri-star-line"></i>
                                            <i className="ri-star-line"></i>
                                            <i className="ri-star-line"></i>
                                            <i className="ri-star-line"></i>
                                            <i className="ri-star-line"></i>
                                        </span>
                                        ({singleCarItem.rating} Ratings)
                                    </div>
                                </div>
                                <p className="section_description">
                                    {singleCarItem.description}
                                </p>

                                <div className="d-flex align-items-center" style={{ columnGap: "4rem" }}>
                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i style={{ color: "#f9a826" }} className="ri-roadster-line"></i>{singleCarItem.model}</span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i style={{ color: "#f9a826" }} className="ri-settings-5-fill"></i>{singleCarItem.automatic}</span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i style={{ color: "#f9a826" }} className="ri-timer-line"></i>{singleCarItem.speed}</span>
                                </div>

                                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.5rem" }}>
                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i style={{ color: "#f9a826" }} className="ri-map-pin-line"></i>{singleCarItem.gps}</span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i style={{ color: "#f9a826" }} className="ri-wheelchair-fill"></i>{singleCarItem.seatType}</span>

                                    <span className='d-flex align-items-center gap-1 section_description'>
                                        <i style={{ color: "#f9a826" }} className="ri-building-2-fill"></i>{singleCarItem.brand}</span>
                                </div>

                            </div>

                        </Col>
                        <Col lg="7" className='mt-5'>
                            <div className="booking_info mt-5">
                                <h5 className='fw-bold mb-4'>Booking Information</h5>
                                <BookingForm />
                            </div>

                        </Col>
                        <Col lg="5" className='mt-5'>
                            <div className="payment_info mt-5">
                                <h5 className='fw-bold mb-4'>Payment Information</h5>
                                <PaymentMethod />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};

export default CarDetails;