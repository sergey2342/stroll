import React, { Suspense } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import img1 from '../../assets/img/slider-img/slide1.jpg'
import img2 from '../../assets/img/slider-img/slide2.jpg'
import img3 from '../../assets/img/slider-img/slide3.jpg'
import img4 from '../../assets/img/slider-img/slide4.jpg'
import img5 from '../../assets/img/slider-img/slide5.jpg'
import img6 from '../../assets/img/slider-img/slide6.jpg'

import * as styles from './Blog.module.scss'

const LeftMenu = React.lazy(() => import('./LeftMenu/LeftMenu'))
const Posts = React.lazy(() => import('./Posts/Posts'))
const SinglePost = React.lazy(() => import('./SinglePost/SinglePost'))

const postsArr = [
    { id: '1610265635917', src: img1, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: '6359171610265', src: img2, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: '6561610235917', src: img3, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: '16102651ff4917', src: img4, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: '35917fg102656', src: img5, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: '161sf2ef246y67', src: img6, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: 'f23g3_231fb34h', src: img1, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' },
    { id: '65edt4540235917', src: img2, date: 'January 24, 2020', file: 'Travel, World', title: 'Explore your Travel Destinations', ago: '3 mins ago' }
]

const Blog = () => {
    const history = useLocation()
    const isBlogMain = history.pathname === '/blog'

    return (
        <div className="section blog">
            <div className="container">
                {
                    isBlogMain  &&
                    <div className="main-info">
                        <div className="main-info-sub-title">Latest</div>
                        <div className="main-info-title">Blog Posts</div>
                    </div>
                }
                <div className={styles.blog_wrap}>
                    <Suspense fallback={null}><LeftMenu /></Suspense>
                    <Switch>
                        <Route path={`/blog/:postId`} component={() => <Suspense fallback={null}><SinglePost posts={postsArr}/></Suspense>} />
                        <Route path="/blog" component={() => <Suspense fallback={null}><Posts posts={postsArr}/></Suspense>} />
                    </Switch>
                </div>
                {
                    isBlogMain &&
                    <div className={styles.blog_pagination}>
                        <div className={styles.blog_pagination_item}><i className="fad fa-chevron-double-left"></i></div>
                        <div className={`${styles.blog_pagination_item} ${styles.active}`}>1</div>
                        <div className={styles.blog_pagination_item}>2</div>
                        <div className={styles.blog_pagination_item}>3</div>
                        <div className={styles.blog_pagination_item}>4</div>
                        <div className={styles.blog_pagination_item}>5</div>
                        <div className={styles.blog_pagination_item}>6</div>
                        <div className={styles.blog_pagination_item}><i className="fad fa-chevron-double-right"></i></div>
                    </div>  
                }
            </div>
        </div>
    )
}

export default Blog