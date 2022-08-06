import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import carData from '../assets/data/carData';
import Helmet from '../Components/Helmet/Helmet';
import CarItem from '../Ui/CarItem';
import CommonSection from '../Ui/CommonSection';

const CarListing = () => {
    return (
        <Helmet title='Cars'>
            <CommonSection title="Find Your Favourite Car" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="d-flex align-items-center gap-3 mb-5">
                                <span className='d-flex align-items-center gap-2'>
                                    <i className="ri-sort-asc"></i>Sort by
                                </span>
                                <select>
                                    <option >Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div>
                        </Col>
                        {
                            carData.map((item) => <CarItem item={item} key={item.id} />)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarListing;