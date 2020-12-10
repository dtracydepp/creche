import React from "react"
import { Route } from "react-router-dom"
import {CareList} from "./CareList"
import {CareProvider} from "./CareProvider"


export const ApplicationViews = (props) => {
    return (
        <>
              <CareProvider>
              <Route exact path="" render={
                            props => <CareList {...props} />
                        } />
                </CareProvider>

        </>

    )
}

