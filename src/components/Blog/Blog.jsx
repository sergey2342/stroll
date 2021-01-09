import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LeftMenu from './LeftMenu/LeftMenu'
import Posts from './Posts/Posts'

import * as styles from './Blog.module.scss'


const Blog = () => {
    return (
        <div className="section blog">
            <div className="container">
                <div className="main-info">
                    <div className="main-info-sub-title">Latest</div>
                    <div className="main-info-title">Blog Posts</div>
                </div>
                <div className={styles.blog_wrap}>
                    <LeftMenu />
                    <Posts />
                </div>
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
            </div>
        </div>
    )
}

export default Blog