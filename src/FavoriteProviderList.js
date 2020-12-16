import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { User} from "./User"
import "./User.css"

export const FavoriteProviderList = ({ history }) => {
    const { getProviders, providers } = useContext(UserContext)

    // Initialization effect hook -> Go get provider data..I don't think I need this
    useEffect(()=>{
        getProviders()
    }, [])

    return (
        <>
           
            <h1>Favorite Providers</h1>
            <button onClick={() => history.push("/favproviders")}>
                Add Note
            </button>
            <div className="favproviders">
            {
            providers.map(care => <Care key={care.id} care={care} />)
        }
            </div>
        </>
    )
}

