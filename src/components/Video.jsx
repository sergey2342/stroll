import React, { useState, useEffect } from 'react'


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
            <div className="video section">
                <div className="container">
                    <div className="video-preview">
                        <div className="video-play-button" onClick={() => toggleAnimationPopup(togglePopup)}>
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div className="video-info">
                        <div className="main-info video video-info-col">
                            <div className="main-info-sub-title">Short Video</div>
                            <div className="main-info-title">Find Your Perfect Vacation</div>
                        </div>
                        <div className="video-info-col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur consequatur adipisicing elit.</div>
                    </div>
                </div>
            </div>
            {togglePopup && <div className="video-popup">
                <div className={`video-popup-player ${animationPopup === 'showing' ? 'showing' : animationPopup === 'hiding' ? 'hiding' : ''}`}>
                    <div className="video-popup-player-close" onClick={() => toggleAnimationPopup(togglePopup)}><i className="far fa-times"></i></div>
                    <iframe src="https://player.vimeo.com/video/92605278" title="video" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>}
        </>
    )
}

export default Video