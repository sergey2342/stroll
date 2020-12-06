import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from 'redux-form'

import OrderForm from './OrderForm'


const Order = () => {
    const dispatch = useDispatch()

    const submitForm = props => dispatch(reset('order-form'))

    return (
        <div className="section order">
            <div className="container">
                <div className="main-info order">
                    <div className="main-info-sub-title">10-30% Off</div>
                    <div className="main-info-title">Book Now</div>
                </div>
                <OrderForm onSubmit={submitForm}/>
            </div>
        </div>
    )
}

export default Order