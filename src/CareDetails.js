// import React, {useContext, useEffect, useState} from "react"
// import {CareContext} from "./CareProvider"
// import "./Care.css"

// export const CareDetails = (props) => {
//     const {getProviderbyId} = useContext(CareContext)

//     const [providers, setProviders] =useState({})

//     useEffect (() => {
//         const providerId = parseInt(props.match.params.providerId)
//         getProviderbyId(providerId)
//         .then(setProviders)
//     }, [])
    


// return (
//     // Test info
//     <section className="care">
//     <h3 className="care__name">{providers.providerName}</h3>
//     <div className="care__streetaddress">{providers.streetAddress}</div>
//     <div className="care__city">{providers.city}</div>
//     <div className="care__state">{providers.state}</div>
//     <div className="care__zip">{providers.zipCode}</div>
//     <button onClick={() => props.history.push(`/allproviders/${providerId})`}>
//                 Save Favorite Provider
//             </button>

//         </section>

// )

// }
