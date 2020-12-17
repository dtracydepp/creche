import React, { useState, useEffect } from "react"

// context is imported and used by components to get data

export const CareContext = React.createContext()

// pulls data from external API

export const CareProvider = (props) => {
    const [providers, setProviders] = useState([])
    const [providerId, setProviderId] = useState([])

    const getProviders = () => {
        return fetch("http://localhost:8090/providers")
            .then(res => res.json())
            .then(setProviders)
    }

    const getProviderbyId = (providerId) => {
        return fetch(`http://localhost:8090/providers/${providerId}`)
        .then(res => res.json())
        .then(setProviderId)
    }

   
   
    /*
        Returns a context provider which has the
        `providers` state and the `getProviders` function as keys. This
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

