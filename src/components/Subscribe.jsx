import React from 'react'
import { useDispatch } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'


let SubscribeForm = ({ handleSubmit }) => {
    return (
        <form className="subscribe-form" onSubmit={handleSubmit}>
            <Field component="input" type="email" name="email" placeholder="Email" required/>
            <button type="submit">Submit</button>
        </form>
    )
}

SubscribeForm = reduxForm({ form: 'subscribe-form' })(SubscribeForm)


const Subscribe = () => {
    const dispatch = useDispatch()

    const submitForm = props => dispatch(reset('subscribe-form'))

    return (
        <div className="section subscribe">
            <div className="container">
                <div className="subscribe-info">
                    <div className="main-info info-subscribe">
                        <div className="main-info-sub-title">Lets Stay In Touch</div>
                        <div className="main-info-title">Sign Up For 25% Discount</div>
                    </div>
                    <div className="subscribe-descr">Want to get an instant discount for your next tour? Leave your email and sign up for our newsletter with 25% off all our offers.</div>
                    <SubscribeForm  onSubmit={submitForm}/>
                    <div className="subscribe-text">Subscribe to our free weekly newsletter for new update releases (no spam)</div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe