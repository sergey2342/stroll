import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Slider } from '../assets/js/slider'

const slidersData = [
    { id: 0, link: '#', subTitle: 'Mountain Holiday', title: { first: 'Explore your Travel', last: 'Destinations' }, text: 'Enjoy the Best Destinations with Our Travel Agency' },
    { id: 1, link: '#', subTitle: 'Mountain Holiday', title: { first: 'Enjoy your Dream', last: 'Vacation' }, text: 'Enjoy the Best Destinations with Our Travel Agency' },
    { id: 2, link: '#', subTitle: 'Balloon Flights', title: { first: 'Enjoy your Dream', last: 'Vacation' }, text: 'Let"s Enjoy The Wonders of Nature' },
    { id: 3, link: '#', subTitle: 'Mountain Holiday', title: { first: 'Explore your Travel', last: 'Destinations' }, text: 'Let"s Enjoy The Wonders of Nature' }
]

const Main = () => {

    useEffect(() => {
        new Slider('#main-slider', {
            drag: true
        })
      }, [])

    return (
        <div className="main">
            <div id="main-slider" className="slider main-slider">
                <div className="slider-list">
                    <div className="slider-track">
                        {slidersData && slidersData.map(item => {
                            const { id, link, subTitle, title, text } = item

                            return (
                                <div className="slide main-slider-item" key={id}>
                                    <div className="main-slider-item-col">
                                        <div className="main-slider-item-sub-title">{subTitle}</div>
                                        <h3 className="main-slider-item-title">{title.first} <span>{title.last}</span></h3>
                                        <div className="main-slider-item-text">{text}</div>
                                        <Link to={link} className="main-slider-item-button">Read More</Link>
                                    </div>
                                    <div className="main-slider-item-col main-slide-img"></div>
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

export default Main