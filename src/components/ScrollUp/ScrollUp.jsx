import React, { useState, useEffect } from 'react'

import * as styles from './ScrollUp.module.scss'

const ScrollUp = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) ? setShowButton(true) : setShowButton(false))
    }, [])

    const moveTop = () => window.scroll({ top: 0, left: 0, behavior: 'smooth' })

    return (
        <div 
            className={`${styles.scrollup} ${showButton ? styles.active : ''}`} 
            id="scrollup"
            onClick={() => moveTop()}
        >
            <i className="fas fa-arrow-up"></i>
        </div>
    )
}

export default ScrollUp