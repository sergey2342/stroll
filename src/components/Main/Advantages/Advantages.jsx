import React from 'react'
import { Link } from 'react-router-dom'

import * as styles from './Advantages.module.scss'

const Advantages = () => {
    return (
        <div className={`${styles.advantages} section`}>
            <div className="container">
                <div className={styles.advantages_wrap}>
                    <div className={styles.advantages_item}>
                        <div className={styles.advantages_item_rounded}><i className="fas fa-globe-americas"></i></div>
                        <h5 className={styles.advantages_item_title}><Link to="#">Voyages & Cruises</Link></h5>
                        <div className={styles.advantages_item_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                    <div className={styles.advantages_item}>
                        <div className={styles.advantages_item_rounded}><i className="fas fa-bed"></i></div>
                        <h5 className={styles.advantages_item_title}><Link to="#">Hotel Bookings</Link></h5>
                        <div className={styles.advantages_item_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                    <div className={styles.advantages_item}>
                        <div className={styles.advantages_item_rounded}><i className="fas fa-plane"></i></div>
                        <h5 className={styles.advantages_item_title}><Link to="#">Air Tickets</Link></h5>
                        <div className={styles.advantages_item_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                    <div className={styles.advantages_item}>
                        <div className={styles.advantages_item_rounded}><i className="fal fa-file-alt"></i></div>
                        <h5 className={styles.advantages_item_title}><Link to="#">Visas</Link></h5>
                        <div className={styles.advantages_item_text}>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages
