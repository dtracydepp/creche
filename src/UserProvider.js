import React, { useState, useEffect } from "react"

// context is imported and used by components to get data

export const UserContext = React.createContext()

// pulls data from API

export const UserProvider = (props) => {
    const [userProviders, setUserProviders] = useState([])
    const [userProviderId, setUserProviderId] = useState([])

    const getUserProviders = () => {
        return fetch("http://localhost:8088/userProviders")
            .then(res => res.json())
            .then(setUserProviders)
    }

    const getUserProviderbyId = (userProviderId) => {
        return fetch(`http://localhost:8088/userProviders/${userProviderId}`)
            .then(res => res.json())
            .then(setUserProviderId)
    }
    const addFavorite = (provider) => {
        return fetch("http://localhost:8088/userProviders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(provider)
        })
            .then(getUserProviders)
    }


    const addNote = (userproviders) => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userproviders)
        })

    }

    /*
        Returns a context provider which has the
        `providers` state and the `getProviders` function as keys. This
        allows any child elements to access them.
    */
    return (
        <UserContext.Provider value={{
            userProviders, getUserProviders, getUserProviderbyId, userProviderId, addNote, addFavorite
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

