import React, { useState, useEffect } from "react"

// context is imported and used by components to get data

export const CareContext = React.createContext()



export const CareProvider = (props) => {
    const [providers, setProviders] = useState([])
    const [providerId, setProviderId] = useState([])

    // pulls data from external API

    const getProviders = () => {
        return fetch("http://localhost:8090/providers")
            .then(res => res.json())
            // setProviders method ...returns providers variable?
            .then(setProviders) 
    }

    const getProviderbyId = (providerId) => {
        return fetch(`http://localhost:8090/providers/${providerId}`)
        .then(res => res.json())
        .then(setProviderId)
    }

   
   
    /*
        Returns a context provider which has the
        `providers` and providerId state and the `getProviders` and getProviderbyId functions as keys. This
        allows any child elements to access them.
    */
    return (
        <CareContext.Provider value={{
            providers, getProviders, getProviderbyId,providerId
        }}>
            {props.children}
        </CareContext.Provider>
    )
}

