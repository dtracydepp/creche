import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { NoteForm } from "./NoteForm"
import { Care } from "./Care"
import { NoteContext } from "./NoteProvider"
import { NoteList } from "./NoteList"


export const FavoriteProviderList = (props) => {
    const { getUserProviders, userProviders } = useContext(UserContext)
    const { notes, getNote } = useContext(NoteContext)


    // Initialization effect hook..
    useEffect(() => {
        getUserProviders()

    }, [])
    // returning all of the saved providers of the current user
    const currentUserFavProviders = userProviders.filter(up => parseInt(up.userId) === parseInt(localStorage.getItem("app_user_id")))
    //  console.log(currentUserFavProviders)
    //  console.log(localStorage.getItem("app_user_id"))
    return (

        <div className="favproviders">
            <h1>Favorite Providers</h1>


            {
                // mapping through all and filtering out fav providers by user
                currentUserFavProviders.map(care => {
                    return <>
                        {/* props.history.push changing the url when the button is clicked and passing the id of the provider to the url */}
                        <Care key={care.id} care={care} />
                        <NoteList id={care.id} />
                        <button id={care.id} onClick={e => props.history.push(`/provider/notes/${e.target.id}`)} > Add Note </button>
                    </>
                })
            }

        </div>

    )

}

