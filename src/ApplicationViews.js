import React from "react"
import { Route } from "react-router-dom"
import { SearchAll } from "./button/SearchAllButton"
import { CareDetails } from "./CareDetails"
import { CareList } from "./CareList"
import { CareProvider } from "./CareProvider"
import { FavoriteProviderList } from "./FavoriteProviderList"
import { NoteForm } from "./NoteForm"
import { NoteProvider } from "./NoteProvider"
import { UserProvider } from "./UserProvider"



export const ApplicationViews = (props) => {
    return (
        <>
            <NoteProvider>
                <CareProvider>
                    <UserProvider>
                        <Route exact path="/allproviders" render={
                            props => <CareList {...props} />
                        } />
                        {/* the : means that whatever comes in this position will be a variable whose value will be whatever is in this position in the url. the \d+ makes sure this only happen if this value is a number */}
                        <Route exact path="/providers/:providerId(\d+)" render={
                            props => <CareDetails {...props} />
                        } />

                        <Route exact path="/favproviders" render={
                            props => <FavoriteProviderList {...props} />
                        } />
                        <Route exact path="/provider/notes/:userProviderId(\d+)" render={
                            props => <NoteForm {...props} />
                        } />
                        <Route exact path="/" render={props => <SearchAll {...props} />} />

                    </UserProvider>
                </CareProvider>
            </NoteProvider>

        </>

    )
}

