import React from "react"
import "../button/SearchAllButton.css"

export const SearchAll = (props) => {
    return (

        <button onClick={() => props.history.push("/allproviders")}>
                Search All Providers
            </button>

    )
            }