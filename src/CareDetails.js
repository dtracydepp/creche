import React, { useContext, useEffect, useState } from "react"
import { CareContext } from "./CareProvider"
import "./Care.css"
import { UserContext } from "./UserProvider"

export const CareDetails = (props) => {
  const { providers, getProviders, setProviders, getProviderbyId } = useContext(CareContext)
  const { addFavorite } = useContext(UserContext)


  const providerId = parseInt(props.match.params.providerId)
  useEffect(() => {
    getProviders()


  }, [])


  // console.log(props)
  return (
    <>

      {
        providers.map(provider => {
          if (provider.providerId === providerId && provider.hasViolation) {
            return (
              <>
                <h3 className="care__name">{provider.providerName}</h3>
                <div className="care__streetaddress">{provider.streetAddress}</div>
                <div className="care__city">{provider.city}, {provider.state} {provider.zipCode}</div>
                <div className="care__phone">{provider.areaCode}-{provider.prefix}-{provider.suffix}</div>
                <div className="care__age">Ages: {provider.minAge}-{provider.maxAge}</div>
                <div className="care__violation">Has Violation? Yes </div>
                <button onClick={() => {
                  addFavorite({
                    userId: parseInt(localStorage.getItem("app_user_id")),
                    providerId: parseInt(provider.providerId),
                    providerName: provider.providerName,
                    streetAddress: provider.streetAddress
                  }).then(() => {
                    props.history.push(`/favproviders`)
                  })
                }}>Save Provider</button>
              </>
            )



            // !does not equal

          } else if (provider.providerId === providerId && !provider.hasViolation) {
            return (
              <>
                <h3 className="care__name">{provider.providerName}</h3>
                <div className="care__streetaddress">{provider.streetAddress}</div>
                <div className="care__city">{provider.city}, {provider.state} {provider.zipCode}</div>
                <div className="care__phone">{provider.areaCode}-{provider.prefix}-{provider.suffix}</div>
                <div className="care__age">Ages: {provider.minAge}-{provider.maxAge}</div>
                <div className="care__violation">Has Violation? No </div>
                <button onClick={() => {
                  addFavorite({
                    userId: parseInt(localStorage.getItem("app_user_id")),
                    providerId: parseInt(provider.providerId),
                    providerName: provider.providerName,
                    streetAddress: provider.streetAddress
                  }).then(() => {
                    props.history.push(`/favproviders`)
                  })
                }}>Save Provider</button>
              </>
            )
          }
        })



      }

    </>
  )

}
