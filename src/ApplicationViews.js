import React from "react"
import { Route } from "react-router-dom"
import {CareList} from "./CareList"
import {CareProvider} from "./CareProvider"
import {FavoriteProviderList} from "./FavoriteProviderList"


export const ApplicationViews = (props) => {
    return (
        <>
              <CareProvider>
              {/* <FavoriteProviderList> */}
              <Route exact path="/allproviders" render={
                            props => <CareList {...props} />
                        } />
                
                   
                       <Route exact path="./favproviders" render={
                           props=> <CareList {...props} />
                       }/>
                       {/* </FavoriteProviderList>      */}
                       </CareProvider>

        </>

    )
}

