import React from 'react'
import { Link } from 'react-router-dom'

import aboutImg from '../../../assets/img/email-bg.jpg'

import * as styles from './Story.module.scss'

const Story = () => {

    return (
        <div className={`section story ${styles.story}`}>
            <div className="container">
                <div className={styles.story_wrap}>
                    <div className="main-info">
                        <div className="main-info-sub-title">The Story</div>
                        <div className="main-info-title">About Us</div>
                    </div>
                    <div className={styles.story_about}>
                        <div className={styles.story_about_col}>
                            <img src={aboutImg} alt="img"/>
                        </div>
                        <div className={styles.story_about_col}>
                            <div className={styles.story_about_descr}>
                                <div className={`main-title ${styles.story_about_descr_title}`}>Time To See The World</div>
                                <div className={styles.story_about_descr_text}>
                                    Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia
                                    <br/><br/>
                                    Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.story_feature}>
                        <div className={`main-title ${styles.story_feature_main_title}`}>What We Do ?.</div>
                        <div className={styles.story_feature_col}>
                            <Link to="#" className={styles.story_feature_col_title}>Diverse Destinations</Link>
                            <div className={styles.story_feature_col_text}>Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.</div>
                        </div>
                        <div className={styles.story_feature_col}>
                            <Link to="#" className={styles.story_feature_col_title}>Great Hotels</Link>
                            <div className={styles.story_feature_col_text}>Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.</div>
                        </div>
                        <div className={styles.story_feature_col}>
                            <Link to="#" className={styles.story_feature_col_title}>Fast Booking</Link>
                            <div className={styles.story_feature_col_text}>Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story