import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { hamburgerIcon } from '../assets/js/icons'

const Nav = () => {
    const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false)
    const [animationMenu, setAnimationMenu] = useState(false)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    const toggleHamburger = (state) => {
        if(!state) {
            setAnimationMenu(true)
            setToggleHamburgerMenu(true)
            setTimeout(() => setAnimationMenu(false), 400)
        } else {
            setAnimationMenu(true)
            setToggleHamburgerMenu(false)
            setTimeout(() => setAnimationMenu(false), 290)
        }
    }

    return (
        <div className="nav">
            <Link to="/" className="main-logo">Str<i className="fas fa-globe-americas"></i>ll</Link>
            <div 
                className="nav-hamburger" 
                onClick={() => toggleHamburger(toggleHamburgerMenu)}>{hamburgerIcon}
            </div>
            <div 
                className={`nav-item-wrap ${animationMenu ? 'collapsing' : ''}`} 
                area-expanded={toggleHamburgerMenu ? 'show' : 'hide'}
            >
                <Link to="#" className="nav-item active">Home</Link>
                <Link to="#" className="nav-item">About</Link>
                <Link to="#" className="nav-item">Destinations</Link>
                <span className={`nav-item dropdown ${toggleDropdown ? 'show' : ''}`}>
                    <span className="dropdown-button" onClick={() => setToggleDropdown(!toggleDropdown)}>Blog <i className="fal fa-angle-down"></i></span>
                    <div className="dropdown-menu">
                        <Link to="#" className="dropdown-item">Blog</Link>
                        <Link to="#" className="dropdown-item">Blog Single</Link>
                        <Link to="#" className="dropdown-item">Landing Page</Link>
                    </div>
                    <div className="dropdown-bg" onClick={() => setToggleDropdown(false)}></div>
                </span>
                <Link to="#" className="nav-item">Contact</Link>
            </div>
        </div>
    )
}

export default Nav