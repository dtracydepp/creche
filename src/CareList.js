import React, {useContext, useEffect } from "react"
import { CareContext } from "./CareProvider"
import {Care} from "./Care"
import "./Care.css"

export const CareList = (props) => {
    // This state changes when `getProviders()` is invoked below

    const { providers, getProviders } = useContext(CareContext)

    /*
         Component was"mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders. Renders one time.
    */
    useEffect(() => {
        // console.log("CareList: Initial render before data")
        getProviders()
    }, [])

    /*
       The effect is listening for state of providers to change, not doing anything right now.
    */
    useEffect(() => {
        // console.log("CareList: state changed")
        // console.log(providers)
    }, [providers]) 
    // 
// mapping over array of providers. care ={care} the entire object of the childcare provider. 
    return (
        <div className="providers">
            <h3>Nashville, TN Child Care Providers</h3>
        { 
            providers.map(care => <Care key={care.id} care={care} />) 
        }
        </div>
    )
}