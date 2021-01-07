import React from 'react'
import { Link } from 'react-router-dom'

import * as styles from './Price.module.scss'

const priceArr = [
    { 
        id: 0,
        popular: false,
        title: 'BASIC',
        price: '100',
        advant: [
            { id: 0, type: true, text: 'Lorem ipsum dolor' },
            { id: 1, type: true, text: 'Sit amet, consectetu' },
            { id: 2, type: true, text: 'Unde omnis iste natus' },
            { id: 3, type: false, text: 'Dolore magna aliqua' },
            { id: 4, type: false, text: 'Integer et augue' },
        ]  
    },
    { 
        id: 1,
        popular: true,
        title: 'STANDARD',
        price: '300',
        advant: [
            { id: 0, type: true, text: 'Lorem ipsum dolor' },
            { id: 1, type: true, text: 'Sit amet, consectetu' },
            { id: 2, type: true, text: 'Sed do eiusmod tempor' },
            { id: 3, type: true, text: 'Dolore magna aliqua' },
            { id: 4, type: false, text: 'Integer et augue' },
        ]  
    },
    { 
        id: 2,
        popular: false,
        title: 'EXCLUSIVE',
        price: '395',
        advant: [
            { id: 0, type: true, text: 'Ut enim ad minim' },
            { id: 1, type: true, text: 'Quis nostrud exerc' },
            { id: 2, type: true, text: 'Ullamco laboris nisi ut' },
            { id: 3, type: true, text: 'Dolore magna aliqua' },
            { id: 4, type: true, text: 'Integer et augue' },
        ]  
    }
]


const Price = () => {
    return (
        <div className="section price">
            <div className="container">
                <div className="main-info tours">
                    <div className="main-info-sub-title">Packages</div>
                    <div className="main-info-title">Pricing Plans</div>
                </div>
                <div className={styles.price_wrap}>
                    {
                        priceArr && priceArr.map(item => {
                            const isPopular = item.popular ? styles.popular : styles.no_popular

                            return (
                                <div className={`${styles.price_item} ${isPopular}`} key={item.id}>
                                    {item.popular && <div className={styles.price_item_popular}>POPULAR</div>}
                                    <div className={`${styles.price_item_title} ${isPopular}`}>{item.title}</div>
                                    <div className={styles.price_item_price}><sup>$</sup>{item.price}<sub>/mo</sub></div>
                                    <div className={styles.price_item_advant}>
                                        {
                                            item.advant.map(({id, type, text}) => {
                                                const isType = type ? styles.opened : styles.closed
                                                const isTypeIcon = type ? 'fad fa-check' : 'fad fa-times'

                                                return (
                                                    <div className={`${styles.price_item_advant_item} ${isType}`} key={id}>
                                                        <div className={styles.price_item_advant_item_round}><i className={isTypeIcon}></i></div>
                                                        <div className={styles.price_item_advant_item_text}>{text}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <Link to="#" className={`main-button ${styles.price_item_button}`}>Get Started</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Price