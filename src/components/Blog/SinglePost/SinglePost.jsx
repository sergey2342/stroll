/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import SinglePostCommentsForm from './SinglePostCommentsForm'

import img1 from '../../../assets/img/feedback-img/t1.jpg'
import img2 from '../../../assets/img/feedback-img/t2.jpg'

import * as styles from './SinglePost.module.scss'

const SinglePost = ({ posts }) => {
    const [post, setPost] = useState()

    const { postId } = useParams()

    useEffect(() => {
        setPost(() => posts.find(post => post.id === postId))
    }, [])

    if(!post) {
        return (
            <div className={styles.blog_single_nopost}>
                <div className={styles.blog_single_nopost_title}>Пост не найден</div>
                <Link to="/blog" className={`main-button ${styles.blog_single_nopost_button}`}>Все посты</Link>
            </div>
        )
    }

    const handleSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={styles.blog_single}>
            <div className="main-info">
                <div className="main-info-sub-title">Stroll</div>
                <div className="main-info-title">{post.title}</div>
                <div className="main-info-text">By <span style={{color: '#141414'}}>Admin</span>, {post.date}</div>
            </div>
            <div className={styles.blog_single_img}><LazyLoadComponent><img src={post.src} alt="картинка"/></LazyLoadComponent></div>
            <div className={styles.blog_single_text}>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit..Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti odit? At iure facere, porro repellat officia quas, dolores magnam assumenda soluta odit harum voluptate inventore ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo officia.
                <br/><br/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti odit? At iure facere, porro repellat officia quas, dolores magnam assumenda soluta odit harum voluptate inventore ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo officia.
            </div>
            <blockquote>
                <i className="fa fa-quote-left"></i>
                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.
                <span>- Michael Smith City Name</span>
            </blockquote>
            <div className={styles.blog_single_tags}>
                <div className={styles.blog_single_tags_main}>Tags: <span>{post.file}</span></div>
                <div className={styles.blog_single_tags_social}>
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-tumblr"></i></Link>
                    <Link to="#"><i className="fab fa-reddit"></i></Link>
                </div>
            </div>
            <div className={styles.blog_single_about}>
                <div className={styles.blog_single_about_img}><LazyLoadComponent><img src={img1} alt="картинка"/></LazyLoadComponent></div>
                <div className={styles.blog_single_about_info}>
                    <div className={styles.blog_single_about_name}>Harvard milan</div>
                    <div className={styles.blog_single_about_text}>Vivamus a ligula quam. Ut blandit eu leo non suscipit.Nulla quis lorem neque, mattis venenatis lectus. In interdum ullamcorper dolor.Lorem ipsum dolor sit amet.</div>
                    <div className={styles.blog_single_about_social}>
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-tumblr"></i></Link>
                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                        <Link to="#"><i className="fab fa-google-plus-g"></i></Link>
                        <Link to="#"><i className="fab fa-vk"></i></Link>
                    </div>          
                </div>
            </div>
            <div className={styles.blog_single_comments}>
                <div className={styles.blog_single_comments_title}>Comments: 2</div>
                <div className={styles.blog_single_comments_item}> 
                    <LazyLoadComponent><img src={img1} alt="картинка"/></LazyLoadComponent>
                    <div className={styles.blog_single_comments_item_info}>
                        <div className={styles.blog_single_comments_item_info_name}>Michael Smith</div>
                        <div className={styles.blog_single_comments_item_info_date}>February 25, 2020 - 3:02 am</div>
                        <div className={styles.blog_single_comments_item_info_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, hic reprehenderit eum cupiditate deleniti asperiores illum ad tenetur aliquam culpa fugit odit consequatur.</div>
                        <div className={styles.blog_single_comments_item_info_reply}><i className="fas fa-reply"></i> Reply</div>
                    </div>
                </div>
                <div className={styles.blog_single_comments_item}> 
                    <LazyLoadComponent><img src={img2} alt="картинка"/></LazyLoadComponent>
                    <div className={styles.blog_single_comments_item_info}>
                        <div className={styles.blog_single_comments_item_info_name}>Jeffrey Nadrich</div>
                        <div className={styles.blog_single_comments_item_info_date}>February 25, 2020 - 3:02 am</div>
                        <div className={styles.blog_single_comments_item_info_text}>Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis. Rerum illo accusantium aliquid quae adipisci fugiat sapiente delectus unde architecto. Tempore saepe maxime illo laborum obcaecati.</div>
                        <div className={styles.blog_single_comments_item_info_reply}><i className="fas fa-reply"></i> Reply</div>
                        
                        <div className={`${styles.blog_single_comments_item} ${styles.blog_single_comments_reply}`}> 
                            <LazyLoadComponent><img src={img1} alt="картинка"/></LazyLoadComponent>
                            <div className={styles.blog_single_comments_item_info}>
                                <div className={styles.blog_single_comments_item_info_name}>Michael Smith</div>
                                <div className={styles.blog_single_comments_item_info_date}>February 25, 2020 - 3:02 am</div>
                                <div className={styles.blog_single_comments_item_info_text}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</div>
                                <div className={styles.blog_single_comments_item_info_reply}><i className="fas fa-reply"></i> Reply</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SinglePostCommentsForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default SinglePost