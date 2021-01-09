import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import img1 from '../../../assets/img/slider-img/slide1.jpg'
import img2 from '../../../assets/img/slider-img/slide2.jpg'
import img3 from '../../../assets/img/slider-img/slide3.jpg'
import img4 from '../../../assets/img/slider-img/slide4.jpg'
import img5 from '../../../assets/img/slider-img/slide5.jpg'
import img6 from '../../../assets/img/slider-img/slide6.jpg'

import * as styles from './Posts.module.scss'

const postsArr = [
    { id: 0, src: img1, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 1, src: img2, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 2, src: img3, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 3, src: img4, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 4, src: img5, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 5, src: img6, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 6, src: img1, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 7, src: img2, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' }
]


const Posts = () => {
    return (
        <div className={styles.blog_right}>
            {
                postsArr && postsArr.map(({id, src, date, file, title, ago}) => {
                    return (
                        <Link to="#" className={styles.blog_right_post} key={id}>
                            <LazyLoadComponent><img src={src} alt="картинка"/></LazyLoadComponent>
                            <div className={styles.blog_right_post_info}>
                                <span><i className="far fa-clock"></i>{date}</span>
                                <span><i className="fad fa-folder-open"></i>{file}</span>
                            </div>
                            <div className={styles.blog_right_post_title}>{title}</div>
                            <div className={styles.blog_right_post_ago}>{ago}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Posts