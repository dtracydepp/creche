import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import {NoteForm} from "./NoteForm"
import {Care} from "./Care"

// import "./User.css"

export const FavoriteProviderList = ({ props }) => {
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
                
             <Care key={care.id} care={care} />
             <button id={care.id} onClick={ e => console.log(e.target.id)  } > Add Note </button>
             </>})
            }
            
        </div>

    )

}

{/* <NoteForm key ={e.target.id} savedList={e.target.id}/> */}