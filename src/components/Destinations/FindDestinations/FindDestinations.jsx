import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import * as styles from './FindDestinations.module.scss'


const FindDestinations = ({ imgArr }) => {
    return (
        <div className="section find_destinations">
            <div className="container">
                <div className="main-info">
                    <div className="main-info-sub-title">Find Your</div>
                    <div className="main-info-title">Destinations</div>
                    <div className="main-info-text">You are now free to move about the country.</div>
                </div>
                <div className={styles.find_destinations_wrap}>
                    {
                        imgArr && imgArr.map(({id, city, src}) => {
                            return (
                                <Link to="#" className={styles.find_destinations_item} key={id}>
                                    <LazyLoadComponent>
                                        <img src={src} alt="картинка"/>
                                    </LazyLoadComponent>
                                    <div className={styles.find_destinations_item_center}>{city}</div>
                                    <div className={styles.find_destinations_item_bottom}>{city}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FindDestinations