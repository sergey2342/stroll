import React from 'react'
import { useDispatch } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import * as styles from './Subscribe.module.scss'

let SubscribeForm = ({ handleSubmit }) => {
    return (
        <form className={styles.subscribe_form} onSubmit={handleSubmit}>
            <Field component="input" type="email" name="email" placeholder="Email" required/>
            <button type="submit">Submit</button>
        </form>
    )
}

SubscribeForm = reduxForm({ form: 'subscribe-form' })(SubscribeForm)


const Subscribe = () => {
    const dispatch = useDispatch()

    const submitForm = postData => { 
        console.log('Отправка...') 
        let t = setTimeout(() => { 
            if(Math.random() > 0.5) { 
                console.log('Отправлено', postData) 
                dispatch(reset('subscribe_form')) 
            } else { 
                console.log('Ошибка отправки') 
            } 
            clearTimeout(t) 
        }, 1000) 
    }

    return (
        <LazyLoadComponent>
            <div className={`section subscribe ${styles.subscribe}`}>
                <div className="container">
                    <div className={styles.subscribe_info}>
                        <div className="main-info info-subscribe">
                            <div className="main-info-sub-title">Lets Stay In Touch</div>
                            <div className="main-info-title">Sign Up For 25% Discount</div>
                        </div>
                        <div className={styles.subscribe_descr}>Want to get an instant discount for your next tour? Leave your email and sign up for our newsletter with 25% off all our offers.</div>
                        <SubscribeForm  onSubmit={submitForm}/>
                        <div className={styles.subscribe_text}>Subscribe to our free weekly newsletter for new update releases (no spam)</div>
                    </div>
                </div>
            </div>
        </LazyLoadComponent>
    )
}

export default Subscribe