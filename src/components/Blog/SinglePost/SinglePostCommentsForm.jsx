import React from 'react'
import { reduxForm, Field } from 'redux-form'

import * as styles from './SinglePost.module.scss'


let SinglePostCommentsForm = ({ handleSubmit }) => {
    return (
        <div className={styles.blog_single_comments_form}>
           <div className={styles.blog_single_comments_form_title}>Leave a Reply</div>
           <div className={styles.blog_single_comments_form_text}>Your email address will not be published. Required fields are marked *</div>
           <form onSubmit={handleSubmit}>
                <div className={styles.blog_single_comments_form_about}>
                    <div className={styles.blog_single_comments_form_about_item}>
                        <label htmlFor="contact_name">Your Name</label>
                        <Field id="contact_name" className="main-input" component="input" name="name" type="text" required/>
                    </div>
                    <div className={styles.blog_single_comments_form_about_item}>
                        <label htmlFor="contact_email">Your Email ID</label>
                        <Field id="contact_email" className="main-input" component="input" name="email" type="text" required/>
                    </div>
                    <div className={styles.blog_single_comments_form_about_item}>
                        <label htmlFor="contact_website">Website</label>
                        <Field id="contact_website" className="main-input" component="input" name="website" type="text" required/>
                    </div>
                </div>
                <div className={styles.blog_single_comments_form_about}>
                    <div className={styles.blog_single_comments_form_about_item}>
                        <label htmlFor="contact_message">Your Comment</label>
                        <Field id="contact_message" className="main-input" component="textarea" name="message" type="text" required/>
                    </div>
                </div>
                <button className={`subscribe-button ${styles.blog_single_comments_form_button}`} type="submit">Post Comment</button>
            </form>
        </div>
    )
}

SinglePostCommentsForm = reduxForm({form: 'post-comment'})(SinglePostCommentsForm)

export default SinglePostCommentsForm