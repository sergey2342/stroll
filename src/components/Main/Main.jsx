import React from 'react'

import Top from './Top/Top'
import Advantages from './Advantages/Advantages'
import Tours from './Tours/Tours'
import Video from './Video/Video'
import Order from './Order/Order'
import Subscribe from './Subscribe/Subscribe'
import Feedback from './Feedback/Feedback'


const Main = () => {
    console.log('render Main')
    return (
        <>
            <Top />
            <Advantages />
            <Tours />
            <Video />
            <Order />
            <Subscribe />
            <Feedback />
        </>
    )
}

export default Main