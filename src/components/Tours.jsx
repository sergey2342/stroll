import React from 'react'
import { Link } from 'react-router-dom'

import slide1 from '../assets/img/popular-packages/1.jpg'
import slide2 from '../assets/img/popular-packages/2.jpg'
import slide3 from '../assets/img/popular-packages/3.jpg'
import slide4 from '../assets/img/popular-packages/4.jpg'
import slide5 from '../assets/img/popular-packages/5.jpg'
import slide6 from '../assets/img/popular-packages/6.jpg'

const toursData = [
    { id: 0, link: '#', src: slide1, city: 'Paris', info: '3Days, 4 Nights Start From', price: '750' },
    { id: 1, link: '#', src: slide2, city: 'Bankok', info: '2Days, 3 Nights Start From', price: '650' },
    { id: 2, link: '#', src: slide3, city: 'Maldives', info: '2Days, 3 Nights Start From', price: '550' },
    { id: 3, link: '#', src: slide4, city: 'Greece', info: '3Days, 4 Nights Start From', price: '950' },
    { id: 4, link: '#', src: slide5, city: 'London', info: '2Days, 3 Nights Start From', price: '550' },
    { id: 5, link: '#', src: slide6, city: 'Julian Alps', info: '3Days, 4 Nights Start From', price: '850' }
]


const Tours = () => {
    return (
        <div className="tours section">
            <div className="container">
                <div className="main-info tours">
                    <div className="main-info-sub-title">Hot Tours</div>
                    <div className="main-info-title">Popular Packages</div>
                </div>
                <div className="tours-wrap">
                    {toursData && toursData.map(tour => {
                        const {id, link, src, city, info, price} = tour
                        
                        return (
                            <Link to={link} className="tours-item" key={id}>
                                <img src={src} alt="картинка"/>
                                <div className="tours-item-info">
                                    <h4 className="tours-item-info-city">{city}</h4>
                                    <div className="tours-item-info-price">{info} <span>${price}</span></div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div> 
        </div>
    )
}

export default Tours