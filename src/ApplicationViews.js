import React from "react"
import { Route } from "react-router-dom"
// import { CareDetails } from "./CareDetails"
import {CareList} from "./CareList"
import {CareProvider} from "./CareProvider"



export const ApplicationViews = (props) => {
    return (
        <>
              <CareProvider>
             
              <Route exact path="/allproviders" render={
                            props => <CareList {...props} />
                        } />
                {/* <Route path="/providers/:providerId(/d+)" render={
                    props => <CareDetails{...props} />
                } /> */}
                   
                       </CareProvider>

        </>

    )
}

