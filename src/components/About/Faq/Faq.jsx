import React from 'react'

import * as styles from './Faq.module.scss'

const itemsArr = [
    { id: 1, title: 'Tour Guide', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velitnobisaliquamlaboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, adcorruptiliberoomnis sapientenon assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendisipsamculpa, quivoluptates eveniet, incidunt officiis eaque iste minima autem.' },
    { id: 2, title: 'General Manager', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velitnobisaliquamlaboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, adcorruptiliberoomnis sapientenon assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendisipsamculpa, quivoluptates eveniet, incidunt officiis eaque iste minima autem.' },
    { id: 3, title: 'Online Bookings', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velitnobisaliquamlaboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, adcorruptiliberoomnis sapientenon assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendisipsamculpa, quivoluptates eveniet, incidunt officiis eaque iste minima autem.' },
    { id: 4, title: 'What should I bring on the trip?', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velitnobisaliquamlaboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, adcorruptiliberoomnis sapientenon assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendisipsamculpa, quivoluptates eveniet, incidunt officiis eaque iste minima autem.' },
    { id: 5, title: 'What do I need to know beforehand?', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velitnobisaliquamlaboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, adcorruptiliberoomnis sapientenon assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendisipsamculpa, quivoluptates eveniet, incidunt officiis eaque iste minima autem.' },
    { id: 6, title: 'Online Bookings', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velitnobisaliquamlaboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, adcorruptiliberoomnis sapientenon assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendisipsamculpa, quivoluptates eveniet, incidunt officiis eaque iste minima autem.' },
]

const Faq = () => {
    return (
        <div className={`section faq ${styles.faq}`}>
            <div className="container">
                    <div className="main-info info-subscribe">
                        <div className="main-info-sub-title">FaQs</div>
                        <div className="main-info-title">We Listen And Work Together To Create A Trully <br/> Unique And Unforgettable Experience.</div>
                    </div>
                    <div className={styles.faq_wrap}>
                        {
                            itemsArr && itemsArr.map(item => {
                                return (
                                    <div className={styles.faq_item} key={item.id}>
                                        <input type="checkbox"/>
                                        <i></i>
                                        <div className={styles.faq_item_title}>{item.title}</div>
                                        <div className={styles.faq_item_text}>{item.text}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
    )
}

export default Faq