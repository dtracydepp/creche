import React, { useState, useEffect } from "react"

// context is imported and used by components to get data

export const CareContext = React.createContext()


// useState setting the variable - providers and providerId initial state to an empty array and then putting things into that array so 
// I have access to that information later in my code.
export const CareProvider = (props) => {
    const [providers, setProviders] = useState([])
    const [providerId, setProviderId] = useState([])

    // pulls data from external API

    const getProviders = () => {
        return fetch("http://localhost:8090/providers")
            .then(res => res.json())
            // setting the state of providers
            .then(setProviders) 
    }

    const getProviderbyId = (providerId) => {
        return fetch(`http://localhost:8090/providers/${providerId}`)
        .then(res => res.json())
        // setting the state of providerId
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

