import React from "react"



export const User = ({ user }) => (
    <section className="user">
        <h3 className="care__name">
            <Link to={{pathname:`/providers/${care.providerId}`}}>
                {care.providerName}
            </Link>
            </h3>
        <div className="care__streetaddress">{care.streetAddress}</div>
        <div className="care__city">`{care.city}, {care.state} {care.zipCode} </div>
        
            </section>
)