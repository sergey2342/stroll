import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import img1 from '../../../assets/img/intresting-blog/1.jpg'
import img2 from '../../../assets/img/intresting-blog/2.jpg'
import img3 from '../../../assets/img/intresting-blog/3.jpg'
import insta1 from '../../../assets/img/popular-packages/1.jpg'
import insta2 from '../../../assets/img/popular-packages/2.jpg'
import insta3 from '../../../assets/img/popular-packages/3.jpg'
import insta4 from '../../../assets/img/popular-packages/4.jpg'
import insta5 from '../../../assets/img/popular-packages/5.jpg'
import insta6 from '../../../assets/img/popular-packages/6.jpg'

import * as styles from './LeftMenu.module.scss'

const intrestArr = [
    { id: 0, src: img1, title: 'A more rewarding way to travel.', date: 'Jan 20, 2020' },
    { id: 1, src: img2, title: 'A more rewarding way to travel.', date: 'Jan 20, 2020' },
    { id: 2, src: img3, title: 'A more rewarding way to travel.', date: 'Jan 20, 2020' }
]

const ourTagsArr = [
    { id: 0, text: 'Design' },
    { id: 1, text: 'Photography' },
    { id: 2, text: 'Branding' },
    { id: 3, text: 'Creative' },
    { id: 4, text: 'Web Design' },
    { id: 5, text: 'Builder' }
]

const imgArr = [
    { id: 0, src: insta1 },
    { id: 1, src: insta2 },
    { id: 2, src: insta3 },
    { id: 3, src: insta4 },
    { id: 4, src: insta5 },
    { id: 5, src: insta6 },
]


let LeftMenu = ({ handleSubmit }) => {
    console.log('render LeftMenu')

    return (
        <div className={styles.blog_left}>
            {
                intrestArr && intrestArr.map(({id, src, title, date}) => {
                    return (
                        <Link to="#" className={styles.blog_left_post} key={id}>
                            <LazyLoadComponent><img src={src} alt="картинка"/></LazyLoadComponent>
                            <div className={styles.blog_left_post_title}>{title}</div>
                            <div className={styles.blog_left_post_date}>{date}</div>
                        </Link>
                    )
                })
            }
            <div className={styles.blog_left_item}>
                <div className={styles.blog_left_item_title}>Our Tags</div>
                <div className={styles.blog_left_item_tags}>
                    {ourTagsArr && ourTagsArr.map(({id, text}) => <Link to="#" key={id}>{text}</Link>)}
                </div>
            </div>
            <div className={styles.blog_left_item}>
                <div className={styles.blog_left_item_title}>Instagram</div>
                <div className={styles.blog_left_item_insta}>
                    {imgArr && imgArr.map(({id, src}) => <Link to="#" key={id}><LazyLoadComponent><img src={src} alt="картинка"/></LazyLoadComponent></Link>)}
                </div>
            </div>
            <div className={styles.blog_left_item}>
                <div className={styles.blog_left_item_title}>Subscribe</div>
                <form className={styles.blog_left_item_subscribe} onSubmit={handleSubmit}>
                    <Field component="input" type="text" name="mail" className="main-input" placeholder="Your mail address*" required />
                    <button className="subscribe-button">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

LeftMenu = reduxForm({ form: 'blog-subscribe' })(LeftMenu)

export default LeftMenu