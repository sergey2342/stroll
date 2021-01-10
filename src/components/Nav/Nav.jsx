import React, { useState } from 'react'
import { Link, useRouteMatch, useLocation } from 'react-router-dom'

import { hamburgerIcon } from '../../assets/js/icons'

import * as styles from './Nav.module.scss'

const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => {
    const match = useRouteMatch({ path: to, exact: activeOnlyWhenExact })
    return <Link to={to} className={`${styles.nav_item} ${match ? styles.active : ''}`}>{label}</Link>
}


const Nav = React.memo(() => {
    const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false)
    const [animationMenu, setAnimationMenu] = useState(false)
    const [toggleDropdown, setToggleDropdown] = useState(false)
    const history = useLocation()

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

    const isActiveBlog = history.pathname === '/blog' ? styles.active : ''

    console.log('render Nav')

    return (
        <div className={styles.nav}>
            <Link to="/" className="main-logo">Str<i className="fas fa-globe-americas"></i>ll</Link>
            <div 
                className={styles.nav_hamburger} 
                onClick={() => toggleHamburger(toggleHamburgerMenu)}>{hamburgerIcon}
            </div>
            <div 
                className={`${styles.nav_item_wrap} ${animationMenu ? styles.collapsing : ''}`} 
                area-expanded={toggleHamburgerMenu ? 'show' : 'hide'}
            >
                <CustomMenuLink to="/" label="Home" activeOnlyWhenExact={true} />
                <CustomMenuLink to="/about" label="About" />
                <CustomMenuLink to="/destinations" label="Destinations" />
                <span className={`${styles.nav_item} ${styles.dropdown} ${toggleDropdown ? styles.show : ''}`}>
                    <span className={`${styles.dropdown_button} ${isActiveBlog}`} onClick={() => setToggleDropdown(!toggleDropdown)}>Blog <i className="fal fa-angle-down"></i></span>
                    <div className={styles.dropdown_menu}>
                        <Link to="/blog" className={styles.dropdown_item} onClick={() => setToggleDropdown(!toggleDropdown)}>Blog</Link>
                        <Link to="/blog/1610265635917" className={styles.dropdown_item} onClick={() => setToggleDropdown(!toggleDropdown)}>Blog Single</Link>
                        <Link to="/" className={styles.dropdown_item} onClick={() => setToggleDropdown(!toggleDropdown)}>Landing Page</Link>
                    </div>
                    <div className={styles.dropdown_bg} onClick={() => setToggleDropdown(false)}></div>
                </span>
                <CustomMenuLink to="/contact" label="Contact" />
            </div>
        </div>
    )
})

export default Nav