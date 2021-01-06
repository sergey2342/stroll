import React from 'react'
import { Link } from 'react-router-dom'

import team1 from '../../../assets/img/team-img/team1.jpg'
import team2 from '../../../assets/img/team-img/team2.jpg'
import team3 from '../../../assets/img/team-img/team3.jpg'
import team4 from '../../../assets/img/team-img/team4.jpg'

import * as styles from './Team.module.scss'

const teamArr = [
    { id: 0, name: 'Jane Mcallister', pos: 'Executive Officer', img: team1, descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in erat interdum, euismod mauris aliquam.' },
    { id: 1, name: 'Mandy Johnson', pos: 'Financial Officer', img: team2, descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in erat interdum, euismod mauris aliquam.' },
    { id: 2, name: 'Elly Spitch', pos: 'HR Manager', img: team3, descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in erat interdum, euismod mauris aliquam.' },
    { id: 3, name: 'Hanna Zafron', pos: 'Customer Care', img: team4, descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in erat interdum, euismod mauris aliquam.' }
]

const Team = () => {
    return (
        <div className="section team">
            <div className="container">
                <div className="main-info">
                    <div className="main-info-sub-title">Our</div>
                    <div className="main-info-title">Great Team</div>
                </div>
                <div className={styles.team_wrap}>
                    {
                        teamArr && teamArr.map(item => {
                            return (
                                <div className={styles.team_item} key={item.id}>
                                    <div className={styles.team_item_img}>
                                        <img src={item.img} alt="img"/>
                                        <div className={styles.team_item_img_descr}>
                                            <div className={styles.team_item_img_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in erat interdum, euismod mauris aliquam.</div>
                                            <div className={styles.team_item_img_social}>
                                                <Link to="#" className={styles.team_item_img_social_around}><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="#" className={styles.team_item_img_social_around}><i className="fab fa-twitter"></i></Link>
                                                <Link to="#" className={styles.team_item_img_social_around}><i className="fab fa-google-plus-g"></i></Link>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className={styles.team_item_descr}>
                                        <Link to="#" className={styles.team_item_descr_name}>{item.name}</Link>
                                        <div className={styles.team_item_descr_work}>{item.pos}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Team