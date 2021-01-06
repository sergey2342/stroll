import React, { useState, useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import * as styles from './Video.module.scss'

const Video = () => {
    const [togglePopup, setTogglePopup] = useState(false)
    const [animationPopup, setAnimationPopup] = useState(false)

    useEffect(() => {
        togglePopup ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [togglePopup])

    const toggleAnimationPopup = (state) => {
        if(!state) {
            setAnimationPopup('showing')
            setTogglePopup(true)
            setTimeout(() => setAnimationPopup(false), 200)
        } else {
            setAnimationPopup('hiding')
            setTimeout(() => {
                setAnimationPopup(false)
                setTogglePopup(false)
            }, 200)
        }
    }

    return (
        <>
            <div className={`video section ${styles.video}`}>
                <div className="container">
                    <LazyLoadComponent>
                        <div className={styles.video_preview}>
                            <div className={styles.video_play_button} onClick={() => toggleAnimationPopup(togglePopup)}>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                    </LazyLoadComponent>
                    <div className={styles.video_info}>
                        <div className={`main-info video ${styles.video_info_col}`}>
                            <div className="main-info-sub-title">Short Video</div>
                            <div className="main-info-title">Find Your Perfect Vacation</div>
                        </div>
                        <div className={styles.video_info_col}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur consequatur adipisicing elit.</div>
                    </div>
                </div>
            </div>
            {togglePopup && <div className={styles.video_popup}>
                <div className={`${styles.video_popup_player} ${animationPopup === 'showing' ? styles.showing : animationPopup === 'hiding' ? styles.hiding : ''}`}>
                    <div className={styles.video_popup_player_close} onClick={() => toggleAnimationPopup(togglePopup)}><i className="far fa-times"></i></div>
                    <iframe src="https://player.vimeo.com/video/92605278" title="video" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>}
        </>
    )
}

export default Video