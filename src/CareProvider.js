import React, { useState, useEffect } from "react"

// context is imported and used by components to get data

export const CareContext = React.createContext()

// pulls data from external API

export const CareProvider = (props) => {
    const [providers, setProviders] = useState([])

    const getProviders = () => {
        return fetch("https://accwebservices.dhs.tn.gov/accweb/getProviders?countyId=19")
            .then(res => res.json())
            .then(setProviders)
    }

    const addProvider = provider => {
        return fetch("https://accwebservices.dhs.tn.gov/accweb/getProviders?countyId=19", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(provider)
        })
            .then(getProviders)
    }

    /*
        Returns a context provider which has the
        `providers` state, the `addProvider` function,
        and the `getProviders` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CareContext.Provider value={{
            providers, addProvider, getProviders
        }}>
            {props.children}
        </CareContext.Provider>
    )
}