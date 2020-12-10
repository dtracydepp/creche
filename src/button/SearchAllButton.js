import React from "react"
import "../button/SearchAllButton.css"

export const SearchAll = (props) => {
    return (

        <button onClick={() => props.history.push("")}>
                Search All Providers
            </button>

    )
            }