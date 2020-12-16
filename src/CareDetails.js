import React, { useContext, useEffect, useState } from "react"
import { CareContext } from "./CareProvider"
import "./Care.css"

export const CareDetails = (props) => {
  const { providers, getProviders, setProviders, getProviderbyId, addFavorite } = useContext(CareContext)

  // const [provider, setProvider] =useState({})
  const providerId = parseInt(props.match.params.providerId)
  useEffect(() => {
    getProviders()
    // getProviderbyId(providerId)
    // .then(setProvider)

  }, [])


  console.log(props)
  return (
    <>

      {
        providers.map(provider => {
          if (provider.providerId === providerId) {
            return (
              <>
                <h3 className="care__name">{provider.providerName}</h3>
                <div className="care__streetaddress">{provider.streetAddress}</div>
                <div className="care__city">{provider.city}, {provider.state} {provider.zipCode}</div>
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
{/*  */ }