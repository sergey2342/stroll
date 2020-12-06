import React, { useState, useEffect } from 'react'


const ScrollUp = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) ? setShowButton(true) : setShowButton(false))
    }, [])

    const moveTop = () => window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        

    return (
        <div 
            className={`scrollup ${showButton ? 'active' : ''}`} 
            id="scrollup"
            onClick={() => moveTop()}
        >
            <i className="fas fa-arrow-up"></i>
        </div>
    )
}

export default ScrollUp