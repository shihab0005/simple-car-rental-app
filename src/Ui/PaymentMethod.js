import React from 'react';
import masterCard from '../assets/all-images/master-card.jpg'
import Paypal from '../assets/all-images/paypal.jpg'
import '../Style/PaymentMethod.css'

const PaymentMethod = () => {
    return (
        <>
            <div className="payment_method">
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" />Direct Bank Account
                </label>
            </div>
            <div className="payment_method mt-4">
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" />Cheque Payment
                </label>
            </div>
            <div className="payment_method mt-4 d-flex align-items-center justify-content-between">
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" />Master Card
                </label>
                <img src={masterCard} alt="" />
            </div>
            <div className="payment_method mt-4 d-flex align-items-center justify-content-between">
                <label htmlFor="" className='d-flex align-items-center gap-2'>
                    <input type="radio" />Paypal
                </label>
                <img src={Paypal} alt="" />
            </div>
            <div className="payment text-end mt-5">
                <button>Reserve Now</button>
            </div>

        </>
    );
};

export default PaymentMethod;