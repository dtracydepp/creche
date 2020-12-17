import React from "react"
import "./Care.css"
import {Link} from "react-router-dom"


export const Care = ({ care, notes }) => (
    <section className="care">
        <h3 className="care__name">
            <Link to={{pathname:`/providers/${care.providerId}`}}>
                {care.providerName}
            </Link>
            </h3>
            {/* { */}
            {/* //     notes.map(note=>{ */}
            {/* //         if (note.userProviderId === care.id){ */}

            {/* //     return (
            //         <div>
            //         {note.text}
            //         </div>
            //     )
            //         }
            //     })
            // } */}
        <div className="care__streetaddress">{care.streetAddress}</div>
        <div className="care__city">`{care.city}, {care.state} {care.zipCode} </div>
        <div className="care__notes">{care.note}</div>
            </section>
)