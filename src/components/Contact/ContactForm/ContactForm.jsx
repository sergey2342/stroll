import React from 'react'
import { Field, reduxForm } from 'redux-form'

import * as styles from './ContactForm.module.scss'

let ContactForm = ({ handleSubmit }) => {
    return (
        <div className="section contact_form">
            <div className="container">
                <div className="main-info">
                    <div className="main-info-sub-title">Contact Us</div>
                    <div className="main-info-title">Keep In Touch With Us.</div>
                    <div className="main-info-text">Welcome to leave your contact info and we will be in touch shortly</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.contact_form_about}>
                        <div className={styles.contact_form_about_item}>
                            <label htmlFor="contact_name">Your Name</label>
                            <Field id="contact_name" className="main-input" component="input" name="name" type="text" required/>
                        </div>
                        <div className={styles.contact_form_about_item}>
                            <label htmlFor="contact_email">Your Email ID</label>
                            <Field id="contact_email" className="main-input" component="input" name="email" type="text" required/>
                        </div>
                        <div className={styles.contact_form_about_item}>
                            <label htmlFor="contact_subject">Subject</label>
                            <Field id="contact_subject" className="main-input" component="input" name="subject" type="text" required/>
                        </div>
                    </div>
                    <div className={styles.contact_form_about}>
                        <div className={styles.contact_form_about_item}>
                            <label htmlFor="contact_message">Message</label>
                            <Field id="contact_message" className="main-input" component="textarea" name="message" type="text" required/>
                        </div>
                    </div>
                    <button className={`subscribe-button ${styles.contact_form_button}`} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

ContactForm = reduxForm({ form: 'contact-form' })(ContactForm)

export default ContactForm