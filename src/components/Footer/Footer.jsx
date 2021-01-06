import React from 'react'
import { Link } from 'react-router-dom'

import slide1 from '../../assets/img/popular-packages/1.jpg'
import slide2 from '../../assets/img/popular-packages/2.jpg'
import slide3 from '../../assets/img/popular-packages/3.jpg'
import slide4 from '../../assets/img/popular-packages/4.jpg'
import slide5 from '../../assets/img/popular-packages/5.jpg'
import slide6 from '../../assets/img/popular-packages/6.jpg'

import * as styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={`container ${styles.container}`}>
                    <div className={`${styles.footer_top_col} ${styles.footer_top_info}`}>
                        <Link to="/" className="main-logo main-logo-footer">Str<i className="fas fa-globe-americas"></i>ll</Link>
                        <div className={styles.footer_top_info_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className={styles.footer_top_info_icons}>
                            <Link to="#" className={styles.footer_top_info_icons_item}><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#" className={styles.footer_top_info_icons_item}><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="#" className={styles.footer_top_info_icons_item}><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className={styles.footer_top_info_icons_item}><i className="fab fa-google-plus-g"></i></Link>
                            <Link to="#" className={styles.footer_top_info_icons_item}><i className="fab fa-github"></i></Link>
                        </div>
                    </div>
                    <div className={`${styles.footer_top_col} ${styles.footer_top_menu}`}>
                        <div className={styles.footer_top_menu_item}>
                            <div className={styles.footer_top_menu_item_title}>QUICK LINKS</div>
                            <Link to="/"><i className="fal fa-angle-double-right"></i> <span>Home</span></Link>
                            <Link to="/about"><i className="fal fa-angle-double-right"></i> <span>About</span></Link>
                            <Link to="/destinations"><i className="fal fa-angle-double-right"></i> <span>Destinations</span></Link>
                            <Link to="/contact"><i className="fal fa-angle-double-right"></i> <span>Contact</span></Link>
                        </div>
                        <div className={styles.footer_top_menu_item}>
                            <div className={styles.footer_top_menu_item_title}>HELP & SUPPORT</div>
                            <Link to="/"><i className="fal fa-angle-double-right"></i> <span>Live Chart</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Faq</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Support</span></Link>
                            <Link to="#"><i className="fal fa-angle-double-right"></i> <span>Terms of Services</span></Link>
                        </div>
                    </div>
                    <div className={`${styles.footer_top_col} ${styles.footer_top_galery}`}>
                        <div className={styles.footer_top_menu_item_title}>INSTAGRAM GALLERY</div>
                        <div className={styles.footer_top_galery_wrap}>
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
            <div className={styles.footer_bottom}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.footer_bottom_copyright}>© 2020 Stroll. All rights reserved. Design by <Link to="#"> W3Layouts</Link></div>
                    <div className={styles.footer_bottom_menu}>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer