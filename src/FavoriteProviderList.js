import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import {NoteForm} from "./NoteForm"
import {Care} from "./Care"

// import "./User.css"

export const FavoriteProviderList = ( props ) => {
    const { getUserProviders, userProviders } = useContext(UserContext)

    // Initialization effect hook -> Go get provider data..I don't think I need this
    useEffect(() => {
        getUserProviders()
    }, [])

    return (

        <div className="favproviders">
            <h1>Favorite Providers</h1>


            {
                
            userProviders.map(care =>{
              return  <>
                {/* props.history.push changing the url when the button is clicked and passing the id of the provider to the url */}
             <Care key={care.id} care={care} />
             <button id={care.id} onClick={ e =>props.history.push(`/provider/notes/${e.target.id}`)   } > Add Note </button>
             </>})
            }
            
        </div>

    )

}

