import React from "react"
import { Route } from "react-router-dom"
import { CareDetails } from "./CareDetails"
import {CareList} from "./CareList"
import {CareProvider} from "./CareProvider"
import { FavoriteProviderList } from "./FavoriteProviderList"



export const ApplicationViews = (props) => {
    return (
        <>
              <CareProvider>
             
              <Route exact path="/allproviders" render={
                            props => <CareList {...props} />
                        } />
                <Route exact path="/providers/:providerId(\d+)" render={
                    props => <CareDetails {...props} />
                } />
                   
                <Route exact path="/favproviders" render={
                    props => <FavoriteProviderList {...props} />
                } />
                       </CareProvider>

        </>

    )
}

