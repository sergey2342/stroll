import React from 'react'
import { Field, reduxForm } from 'redux-form'

import * as styles from './Order.module.scss'


let OrderForm = ({ handleSubmit }) => {
    return (
        <form className={styles.order_form} onSubmit={ handleSubmit }>
            <div className={styles.order_form_item}>
                <label>Name</label>
                <Field component="input" name="name" type="text" placeholder="Name" required/>
            </div>
            <div className={styles.order_form_item}>
                <label>Destination</label>
                <Field component="select" name="destination" type="text" required>
                    <option>Any</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="eastern-europe">Eastern Europe</option>
                    <option value="europe">Europe</option>
                    <option value="south-america">South America</option>
                </Field>
            </div>
            <div className={styles.order_form_item}>
                <label>Activity</label>
                <Field component="select" name="activity" type="text" required>
                    <option>Any</option>
                    <option value="city-tours">City Tours</option>
                    <option value="cultural-thematic-tours">Cultural & Thematic Tours</option>
                    <option value="family-friendly-tours">Family Friendly Tours</option>
                    <option value="holiday-seasonal-tours">Holiday & Seasonal Tours</option>
                    <option value="indulgence-luxury-tours">Indulgence & Luxury Tours</option>
                    <option value="outdoor-activites">Outdoor Activites</option>
                    <option value="relaxation-tours">Relaxation Tours</option>
                    <option value="wild-adventure-tours">Wild & Adventure Tours</option>
                </Field>
            </div>
            <div className={styles.order_form_item}>
                <label>Duration</label>
                <Field component="select" name="duration" type="text" required>
                    <option>Any</option>
                    <option value="1">1 Day Tour</option>
                    <option value="2">2-4 Days Tour</option>
                    <option value="5">5-7 Days Tour</option>
                    <option value="7">7+ Days Tour</option>
                </Field>
            </div>
            <div className={styles.order_form_item}>
                <label>Date</label>
                <Field component="input" name="date" type="date" required />
            </div>
            <div className={styles.order_form_item}>
                <label>Submit</label>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

OrderForm = reduxForm({ form: 'order-form' })(OrderForm)    

export default OrderForm