import React, { useState } from 'react'

import * as styles from './Address.module.scss'

const addressArr = {
    'paris': { 
        id: 0, 
        city: 'Paris', 
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35316.509278874524!2d2.314286868686687!3d48.85982632920014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sby!4v1610093223620!5m2!1sru!2sby',
        address: '#302, 5th Floor, ALHK-2247 ek, Settlers Lane, New York.', 
        emails: [
            { id: 0, mail: 'stroll1@example.com' },
            { id: 1, mail: 'stroll2@example.com' }
        ],
        phones: [
            { id: 0, phone: '1(21) 224-016-8765' },
            { id: 1, phone: '1(21) 224-016-8764' }
        ] 
    },
    'bankok': { 
        id: 1, 
        city: 'Bankok', 
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124016.84751793629!2d100.50263235701378!3d13.747093626294221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2z0JHQsNC90LPQutC-0LosINCi0LDQuNC70LDQvdC0!5e0!3m2!1sru!2sby!4v1610093338996!5m2!1sru!2sby',
        address: '#302, 5th Floor, ALHK-2247 ek, Al Sharafi building, Dubai.', 
        emails: [
            { id: 0, mail: 'stroll1@example.com' },
            { id: 1, mail: 'stroll2@example.com' }
        ],
        phones: [
            { id: 0, phone: '1(12) 422-610-4678' },
            { id: 1, phone: '1(21) 224-016-8765' }
        ] 
    },
    'maldives': { 
        id: 2, 
        city: 'Maldives', 
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13419.340743562525!2d73.08582249700474!3d-0.6077439006307426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2z0JzQsNC70YzQtNC40LLRiw!5e0!3m2!1sru!2sby!4v1610093400960!5m2!1sru!2sby',
        address: '#411, 3rd Floor, SALK-2247 ek, Al Sharafi building, Saudi Arabia.', 
        emails: [
            { id: 0, mail: 'stroll1@example.com' },
            { id: 1, mail: 'stroll2@example.com' }
        ],
        phones: [
            { id: 0, phone: '1(21) 224-016-8765' },
            { id: 1, phone: '1(21) 224-016-8764' }
        ] 
    },
    'greece': { 
        id: 3, 
        city: 'Greece', 
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17789.458772413887!2d23.717297714760708!3d37.98268946577992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b4ac711716c63%3A0x363a1775dc9a2d1d!2z0JPRgNC10YbQuNGP!5e0!3m2!1sru!2sby!4v1610093459496!5m2!1sru!2sby',
        address: '#248, 2nd Floor, RSSLK-2247 ek, Al Sharafi building, Russia.', 
        emails: [
            { id: 0, mail: 'stroll1@example.com' },
            { id: 1, mail: 'stroll2@example.com' }
        ],
        phones: [
            { id: 0, phone: '1(12) 422-610-4678' },
            { id: 1, phone: '1(21) 224-016-8765' }
        ] 
    }
}

const Address = () => {
    const [currentAddress, setCurrentAddress] = useState('paris')

    return (
        <div className={styles.address}>
            <div className={styles.address_map}>
                <iframe title="map" src={addressArr[currentAddress].src} frameBorder="0" allowFullScreen></iframe>        
            </div>
            <div className={styles.address_info}>
                <div className={styles.address_info_menu}>
                    {
                        addressArr && Object.entries(addressArr).map(([key, value]) => {
                            const isActive = key === currentAddress ? styles.active : ''
                            return (
                                <div className={`${styles.address_info_menu_item} ${isActive}`} onClick={() => setCurrentAddress(key)} key={key}>{value.city}</div>
                            )
                        })
                    }
                </div>
                <div className={styles.address_info_descr}>
                    <div className={styles.address_info_descr_item}>
                        <div className={styles.address_info_descr_round}><i className="fad fa-home"></i></div>
                        <div className={styles.address_info_descr_title}>Address</div>
                        <div className={styles.address_info_descr_about}>{addressArr[currentAddress].address}</div>
                    </div>
                    <div className={styles.address_info_descr_item}>
                        <div className={styles.address_info_descr_round}><i className="fad fa-envelope"></i></div>
                        <div className={styles.address_info_descr_title}>Email</div>
                        {addressArr[currentAddress].emails.map(item => <div className={styles.address_info_descr_about} key={item.id}>{item.mail}</div>)}
                    </div>
                    <div className={styles.address_info_descr_item}>
                        <div className={styles.address_info_descr_round}><i className="fas fa-phone-alt"></i></div>
                        <div className={styles.address_info_descr_title}>Phone</div>
                        {addressArr[currentAddress].phones.map(item => <div className={styles.address_info_descr_about} key={item.id}>{item.phone}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address