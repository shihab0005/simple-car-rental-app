import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import '../Style/CarItem.css';

const CarItem = (props) => {

    const { id, imgUrl, model, carName, speed, automatic, price } = props.item;


    return (
        <Col lg="4" md="4" sm="6" className='mb-5'>
            <div className="car_item">
                <div className="car_image">
                    <img src={imgUrl} alt="" className='w-100' />
                </div>
                <div className="car_item_content mt-4 ">
                    <h4 className="section_title text-center">{carName}</h4>
                    <h6 className="rent_price text-center mt-2">${price}
                        <span>/ Day</span></h6>
                </div>
                <div className="car_item_info d-flex justify-content-between align-items-center mt-4 mb-3 ">
                    <span className='d-flex align-items-center gap-1'><i className="ri-car-line"></i>{model}</span>
                    <span className='d-flex align-items-center gap-1'><i className="ri-settings-2-line"></i>{automatic}</span>
                    <span className='d-flex align-items-center gap-1'><i className="ri-time-line"></i>{speed}</span>
                </div>
                <button className="car_item_btn car_btn_rent w-50">
                    <Link to={`/cars/${id}`}>Rent</Link>
                </button>
                <button className="car_item_btn car_btn_details w-50">
                    <Link to={`/cars/${carName}`}>Details</Link>
                </button>

            </div>
        </Col>
    );
};

export default CarItem;