import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import * as styles from './Posts.module.scss'


const Posts = ({ posts }) => {
    return (
        <div className={styles.blog_right}>
            {
                posts && posts.map(({id, src, date, file, title, ago}) => {
                    return (
                        <Link to={`/blog/${id}`} className={styles.blog_right_post} key={id}>
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