import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import chooseImg from '../../../assets/img/video-img.jpg'

import * as styles from './Choose.module.scss'

const Choose = () => {
    return (
        <div className={`section shoose ${styles.choose}`}>
            <div className="container">
                <div className={styles.choose_wrap}>
                    <div className={styles.choose_wrap_col}>
                        <div className={`main-title ${styles.choose_wrap_title}`}>Why Choose Us</div>
                        <div className={`${styles.choose_wrap_text}`}>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia</div>
                        <LazyLoadComponent><img src={chooseImg} alt="img"/></LazyLoadComponent>
                    </div>
                    <div className={styles.choose_wrap_col}>
                        <div className={styles.choose_wrap_advantages}>
                            <div className={styles.choose_wrap_advantages_item}>
                                <div className={styles.choose_wrap_advantages_around}><i className="fad fa-thumbs-up"></i></div>
                                <div className={styles.choose_wrap_advantages_descr}>
                                    <Link to="#" className={styles.choose_wrap_advantages_descr_title}>Packages</Link>
                                    <div className={styles.choose_wrap_advantages_descr_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.</div>
                                </div>
                            </div>
                            <div className={styles.choose_wrap_advantages_item}>
                                <div className={styles.choose_wrap_advantages_around}><i className="fad fa-tags"></i></div>
                                <div className={styles.choose_wrap_advantages_descr}>
                                    <Link to="#" className={styles.choose_wrap_advantages_descr_title}>Specials</Link>
                                    <div className={styles.choose_wrap_advantages_descr_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.</div>
                                </div>
                            </div>
                            <div className={styles.choose_wrap_advantages_item}>
                                <div className={styles.choose_wrap_advantages_around}><i className="fad fa-suitcase"></i></div>
                                <div className={styles.choose_wrap_advantages_descr}>
                                    <Link to="#" className={styles.choose_wrap_advantages_descr_title}>Retreats</Link>
                                    <div className={styles.choose_wrap_advantages_descr_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose