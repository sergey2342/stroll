import React, { useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import { Slider } from '../../../assets/js/slider'
import '../../../sass/modules/slider.scss';
import * as styles from './ToursSlider.module.scss'


const ToursSlider = ({ imgArr }) => {

    useEffect(() => {
        const toursSlider = new Slider('#tours_slider', 
            { 
                items: 5, 
                gap: 20, 
                drag: true,
                responsive: [
                    {
                        breakpoint: 991,
                        setting: {
                            items: 2
                        }
                    }
                ] 
            })

            return () => toursSlider.clear()
      }, [])

    return (
        <div className={`section tours_slider ${styles.tours_slider}`}>
            <div className="container">
                <div className="slider" id="tours_slider">
                    <div className="slider-list">
                        <div className="slider-track">
                            {
                                imgArr && imgArr.map(({id, city, src, days, price}) => {
                                    return (
                                        <div className={`slide ${styles.tours_slider_item}`} key={id}>
                                            <LazyLoadComponent>
                                                <img src={src} alt="картинка"/>
                                            </LazyLoadComponent>
                                            <div className={styles.tours_slider_item_info}>
                                                <div className={styles.tours_slider_item_city}>{city}</div>
                                                <div className={styles.tours_slider_item_days}>{days} <span>${price}</span></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="slider-arrows"></div>
                    <div className="slider-dots"></div>
                </div>
            </div>
        </div>
    )
}

export default ToursSlider