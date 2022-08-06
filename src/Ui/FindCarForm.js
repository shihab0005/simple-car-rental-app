import React from 'react';
import '../Style/FindCarForm.css';
import { Form, FormGroup } from "reactstrap";
const FindCarForm = () => {
    return (
        <Form className='form'>
            <div className="d-flex jusify-content-between align-items-center flex-wrap">
                <FormGroup className='form_group'>
                    <input type="text" placeholder='From Address' required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type="text" placeholder="To Address" required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input type="date" placeholder='Journey Date' required />
                </FormGroup>
                <FormGroup className='form_group'>
                    <input className='journey_time' type="time" placeholder='Journey Time' required />
                </FormGroup>
                <FormGroup className='select_group'>
                    <select>
                        <option value="ac">AC Car</option>
                        <option value="nonAc">Non AC Car</option>
                    </select>
                </FormGroup>
                <FormGroup className='form_group'>
                    <button className="btn find_car_btn">
                        Find Car
                    </button>
                </FormGroup>
            </div>
        </Form>
    );
};

export default FindCarForm;