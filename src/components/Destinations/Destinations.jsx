import React from 'react'

import FindDestinations from './FindDestinations/FindDestinations'
import ToursSlider from './ToursSlider/ToursSlider'
import Price from './Price/Price'

import slide1 from '../../assets/img/popular-packages/1.jpg'
import slide2 from '../../assets/img/popular-packages/2.jpg'
import slide3 from '../../assets/img/popular-packages/3.jpg'
import slide4 from '../../assets/img/popular-packages/4.jpg'
import slide5 from '../../assets/img/popular-packages/5.jpg'
import slide6 from '../../assets/img/popular-packages/6.jpg'
import slide7 from '../../assets/img/popular-packages/7.jpg'
import slide8 from '../../assets/img/popular-packages/8.jpg'
import slide9 from '../../assets/img/popular-packages/9.jpg'

const imgArr = [
    { id: 0, city: 'Paris', src: slide1, days: '3Days, 4 Nights Start From', price: '750' },
    { id: 1, city: 'Bankok', src: slide2, days: '2Days, 3 Nights Start From', price: '650' },
    { id: 2, city: 'Maldives', src: slide3, days: '2Days, 3 Nights Start From', price: '550' },
    { id: 3, city: 'Greece', src: slide4, days: '3Days, 4 Nights Start From', price: '950' },
    { id: 4, city: 'London', src: slide5, days: '2Days, 2 Nights Start From', price: '550' },
    { id: 5, city: 'Julian Alps', src: slide6, days: '3Days, 4 Nights Start From', price: '850' },
    { id: 6, city: 'Thailand', src: slide7, days: '3Days, 4 Nights Start From', price: '650' },
    { id: 7, city: 'Singapore', src: slide8, days: '3Days, 4 Nights Start From', price: '850' },
    { id: 8, city: 'Egypt', src: slide9, days: '3Days, 4 Nights Start From', price: '750' },
]


const Destinations = () => {
    console.log('render Destinations')
    
    return (
        <>
            <FindDestinations imgArr={imgArr} />
            <ToursSlider imgArr={imgArr} />
            <Price />
        </>
    )
}

export default Destinations