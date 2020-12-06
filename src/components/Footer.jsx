import React from 'react'
import { Link } from 'react-router-dom'

import slide1 from '../assets/img/popular-packages/1.jpg'
import slide2 from '../assets/img/popular-packages/2.jpg'
import slide3 from '../assets/img/popular-packages/3.jpg'
import slide4 from '../assets/img/popular-packages/4.jpg'
import slide5 from '../assets/img/popular-packages/5.jpg'
import slide6 from '../assets/img/popular-packages/6.jpg'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-top-col footer-top-info">
                        <Link to="/" className="main-logo main-logo-footer">Str<i className="fas fa-globe-americas"></i>ll</Link>
                        <div className="footer-top-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className="footer-top-info-icons">
                            <Link to="#" className="footer-top-info-icons-item"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#" className="footer-top-info-icons-item"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="#" className="footer-top-info-icons-item"><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className="footer-top-info-icons-item"><i className="fab fa-google-plus-g"></i></Link>
                            <Link to="#" className="footer-top-info-icons-item"><i className="fab fa-github"></i></Link>
                        </div>
                    </div>
                    <div className="footer-top-col footer-top-menu">
                        <div className="footer-top-menu-item">
                            <div className="footer-top-menu-item-title">QUICK LINKS</div>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Home</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>About</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Destinations</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Contact</span></Link>
                        </div>
                        <div className="footer-top-menu-item">
                            <div className="footer-top-menu-item-title">HELP & SUPPORT</div>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Live Chart</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Faq</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Support</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Terms of Services</span></Link>
                        </div>
                    </div>
                    <div className="footer-top-col footer-top-galery">
                        <div className="footer-top-menu-item-title">INSTAGRAM GALLERY</div>
                        <div className="footer-top-galery-wrap">
                            <Link to="#"><img src={slide1} alt="instagram"/></Link>
                            <Link to="#"><img src={slide2} alt="instagram"/></Link>
                            <Link to="#"><img src={slide3} alt="instagram"/></Link>
                            <Link to="#"><img src={slide4} alt="instagram"/></Link>
                            <Link to="#"><img src={slide5} alt="instagram"/></Link>
                            <Link to="#"><img src={slide6} alt="instagram"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-copyright">© 2020 Stroll. All rights reserved. Design by <Link to="#"> W3Layouts</Link></div>
                    <div className="footer-bottom-menu">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">About Us</Link>
                        <Link to="#">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer