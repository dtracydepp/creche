import React, { useContext, useEffect } from "react"
import { CareContext } from "./CareProvider"
import { Care} from "./Care"
import "./Care.css"

export const FavoriteProviderList = ({ history }) => {
    const { getProviders, providers } = useContext(CareContext)

    // Initialization effect hook -> Go get provider data
    useEffect(()=>{
        getProviders()
    }, [])

    return (
        <>
            <h1>Favorite Providers</h1>

            <button onClick={() => history.push("/favproviders")}>
                Favorite 
            </button>
            <div className="favproviders">
            {
            providers.map(care => <Care key={care.id} care={care} />)
        }
            </div>
        </>
    )
}
