import React from "react"
import "./Care.css"
import {Link} from "react-router-dom"


export const Care = ({ care }) => (
    <section className="care" key= {care.id}>
        <h3 className="care__name">
            <Link to={{pathname:`/providers/${care.providerId}`}}>
                {care.providerName}
            </Link>
            </h3>
        <div className="care__streetaddress">{care.streetAddress}</div>
        <div className="care__city">{care.city}, {care.state} {care.zipCode} </div>
        {/* pulling in notes on ln 16 */}
        <div className="care__notes">{care.note}</div> 
            </section>
)