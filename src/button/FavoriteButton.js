import React from "react"
import "../button/FavoriteButton.css"

export const FavoriteButton = (props) => {
    return (

        <button onClick={() => props.history.push("/favproviders")}>
                Favorite
            </button>

    )
            }