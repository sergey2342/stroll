import React from 'react'

import Story from './Story/Story'
import Choose from './Choose/Choose'
import Faq from './Faq/Faq'
import Team from './Team/Team'
import Travel from './Travel/Travel'

const About = () => {
    console.log('render About')
    return (
        <>
           <Story />
           <Choose />
           <Faq />
           <Team />
           <Travel />
        </>
    )
}

export default About