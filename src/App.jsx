import React from 'react'

import ScrollUp from './components/ScrollUp'
import Nav from './components/Nav'
import Main from './components/Main'
import Advantages from './components/Advantages'
import Tours from './components/Tours'
import Video from './components/Video'
import Order from './components/Order/Order'
import Subscribe from './components/Subscribe'
import Feedback from './components/Feedback'
import Footer from './components/Footer'


const App = () => {
    return (
        <>
            <ScrollUp />
            <Nav />
            <Main />
            <Advantages />
            <Tours />
            <Video />
            <Order />
            <Subscribe />
            <Feedback />
            <Footer />
        </>
    )
}

export default App