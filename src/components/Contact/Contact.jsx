import React from 'react'

import Address from './Address/Address'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
    console.log('render Contact')

    return (
        <>
            <Address />
            <ContactForm />
        </>
    )
}

export default Contact