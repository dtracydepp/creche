import React from "react"
import "./Care.css"
import {Link} from "react-router-dom"


export const Care = ({ care }) => (
    <section className="care">
        <h3 className="care__name">
            <Link to={{pathname:`/providers/${care.providerId}`}}>
                {care.providerName}
            </Link>
            </h3>
        <div className="care__streetaddress">{care.streetAddress}</div>
        <div className="care__city">`{care.city}</div>
        <div className="care__state">{care.state}</div>
        <div className="care__zip">{care.zipCode}</div>
        
            </section>
)