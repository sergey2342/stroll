import React from 'react'

import Story from './Story/Story'
import Choose from './Choose/Choose'

const About = () => {
    console.log('render About')
    return (
        <>
           <Story />
           <Choose />
        </>
    )
}

export default About