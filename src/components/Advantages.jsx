import React from 'react'
import { Link } from 'react-router-dom'


const Advantages = () => {
    return (
        <div className="advantages section">
            <div className="container">
                <div className="advantages-wrap">
                    <div className="advantages-item">
                        <div className="advantages-item-rounded"><i className="fas fa-globe-americas"></i></div>
                        <h5 className="advantages-item-title"><Link to="#">Voyages & Cruises</Link></h5>
                        <div className="advantages-item-text">Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item-rounded"><i className="fas fa-bed"></i></div>
                        <h5 className="advantages-item-title"><Link to="#">Hotel Bookings</Link></h5>
                        <div className="advantages-item-text">Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item-rounded"><i className="fas fa-plane"></i></div>
                        <h5 className="advantages-item-title"><Link to="#">Air Tickets</Link></h5>
                        <div className="advantages-item-text">Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item-rounded"><i className="fal fa-file-alt"></i></div>
                        <h5 className="advantages-item-title"><Link to="#">Visas</Link></h5>
                        <div className="advantages-item-text">Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages
