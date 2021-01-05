import React, { useEffect } from 'react'

import photo1 from '../../../assets/img/feedback-img/t1.jpg'
import photo2 from '../../../assets/img/feedback-img/t2.jpg'
import photo3 from '../../../assets/img/feedback-img/t3.jpg'
import photo4 from '../../../assets/img/feedback-img/t4.jpg'
import photo5 from '../../../assets/img/feedback-img/t5.jpg'
import photo6 from '../../../assets/img/feedback-img/t6.jpg'
import { Slider } from '../../../assets/js/slider'

import '../../../sass/modules/slider.scss';
import * as styles from './Feedback.module.scss'

const feedbacksData = [
    { id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src: photo1, name: 'Theo Hall', work: 'SEO Expert' },
    { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src: photo2, name: 'Jenna Johnson', work: 'SEO Expert' },
    { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src: photo3, name: 'Linda Carini', work: 'SEO Expert' },
    { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src: photo4, name: 'Mike Johnson', work: 'SEO Expert' },
    { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src: photo5, name: 'Theo Hall', work: 'SEO Expert' },
    { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src: photo6, name: 'Jenna Johnson', work: 'SEO Expert' }
]


const Feedback = () => {

    useEffect(() => {
        const feedbackSkider = new Slider('#feedback-slider', 
            { 
                items: 3, 
                gap: 20, 
                drag: true,
                responsive: [
                    {
                        breakpoint: 991,
                        setting: {
                            items: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        setting: {
                            items: 1
                        }
                    }
                ] 
            })

            return () => feedbackSkider.clear()
      }, [])


    return (
        <div className={`section ${styles.feedback}`}>
            <div className="container">
                <div className="main-info info-feedback">
                    <div className="main-info-sub-title">Testimonials</div>
                    <div className="main-info-title">Feedback From Our Customers</div>
                </div>
                <div id="feedback-slider" className={`slider ${styles.feedback_slider}`}>
                    <div className="slider-list">
                        <div className={`slider-track `}>
                            {feedbacksData && feedbacksData.map(feedback => {
                                const { id, text, src, name, work } = feedback

                                return (
                                    <div className={`slide ${styles.feedback_slider_item}`} key={id}>
                                        <i className={`fa fa-quote-left ${styles.feedback_slider_item_icon}`}></i>
                                        <div className={styles.feedback_slider_item_text}>{text}</div>
                                        <div className={styles.feedback_slider_item_info}>
                                            <div className={styles.feedback_slider_item_img}><img src={src} alt="фото"/></div>
                                            <div className={styles.feedback_slider_item_about}>
                                                <div className={styles.feedback_slider_item_name}>{name}</div>
                                                <div className={styles.feedback_slider_item_work}>{work}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="slider-dots"></div>
                </div>
            </div>
        </div>
    )
}

export default Feedback