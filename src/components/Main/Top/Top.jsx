import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Slider } from '../../../assets/js/slider'

import '../../../sass/modules/slider.scss';
import * as styles from './Top.module.scss'

const slidersData = [
    { id: 0, link: '#', subTitle: 'Mountain Holiday', title: { first: 'Explore your Travel', last: 'Destinations' }, text: 'Enjoy the Best Destinations with Our Travel Agency' },
    { id: 1, link: '#', subTitle: 'Mountain Holiday', title: { first: 'Enjoy your Dream', last: 'Vacation' }, text: 'Enjoy the Best Destinations with Our Travel Agency' },
    { id: 2, link: '#', subTitle: 'Balloon Flights', title: { first: 'Enjoy your Dream', last: 'Vacation' }, text: 'Let"s Enjoy The Wonders of Nature' },
    { id: 3, link: '#', subTitle: 'Mountain Holiday', title: { first: 'Explore your Travel', last: 'Destinations' }, text: 'Let"s Enjoy The Wonders of Nature' }
]

const Top = () => {

    useEffect(() => {
        const topSlider = new Slider('#top-slider', {
            drag: true
        })

        return () => topSlider.clear()
      }, [])

    return (
        <div className={`top ${styles.top}`}>
            <div id="top-slider" className={`slider`}>
                <div className="slider-list">
                    <div className="slider-track">
                        {slidersData && slidersData.map(item => {
                            const { id, link, subTitle, title, text } = item

                            return (
                                <div className={`slide ${styles.top_slider_item}`} key={id}>
                                    <div className={styles.top_slider_item_col}>
                                        <div className={styles.top_slider_item_sub_title}>{subTitle}</div>
                                        <h3 className={styles.top_slider_item_title}>{title.first} <span>{title.last}</span></h3>
                                        <div className={styles.top_slider_item_text}>{text}</div>
                                        <Link to={link} className="main-button">Read More</Link>
                                    </div>
                                    <div className={`${styles.top_slider_item_col} ${styles.top_slide_img}`}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="slider-dots"></div>
            </div>
        </div>
    )
}

export default Top