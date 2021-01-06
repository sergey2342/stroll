import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import * as styles from './Travel.module.scss'



const Travel = () => {
    return (
        <LazyLoadComponent>
            <div className={`section travel ${styles.travel}`}>
                <div className="container">
                    <div className={styles.travel_wrap}>
                            <div className="main-info travel">
                                <div className="main-info-sub-title">Let's Travel</div>
                                <div className="main-info-title">Travel More, Create More Memories.</div>
                            </div>
                            <div className={styles.travel_wrap_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam adipisicing elit.</div>
                            <Link to="#" className="main-button">Read More</Link>
                    </div>
                </div>
            </div>
        </LazyLoadComponent>
    )
}

export default Travel