import React from "react"
import "../button/SearchAllButton.css"

export const SearchAll = (props) => {
    return (
        <>
            
            <p>Hello, let us help you find the perfect child care provider!</p>
            <button onClick={() => props.history.push("/allproviders")}>
                Search All Providers
            </button>
        </>
    )
}
// when Search All button is clicked.. props.history.push will route to "allproviders" which renders CareList.js