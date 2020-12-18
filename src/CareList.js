import React, {useContext, useEffect,useState } from "react"
import { CareContext } from "./CareProvider"
import {Care} from "./Care"
import "./Care.css"

export const CareList = ({history}) => {
    // This state changes when `getProviders()` is invoked below

    const { providers, getProviders } = useContext(CareContext)

    /*
         Component was"mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        // console.log("CareList: Initial render before data")
        getProviders()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the providers state changed.
    */
    useEffect(() => {
        // console.log("CareList: state changed")
        // console.log(providers)
    }, [providers])

    return (
        <div className="providers">
            <h3>Nashville, TN Child Care Providers</h3>
        {
            providers.map(care => <Care key={care.id} care={care} />)
        }
        </div>
    )
}