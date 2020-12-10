import React from "react"
import "./Care.css"

export const Care = ({ care }) => (
    <section className="care">
        <h3 className="care__name">{care.providerName}</h3>
        <address className="care__streetaddress">{care.streetAddress}</address>
        <city className="care__city">{care.city}</city>
        <state className="care__state">{care.state}</state>
        <zip className="care__zip">{care.zip}</zip>
    </section>
)