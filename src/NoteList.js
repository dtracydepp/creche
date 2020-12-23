import React, { useContext, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import { UserContext } from "./UserProvider"
import { Note } from "./Note"
import { CareContext } from "./CareProvider"



export const NoteList = ({ id }) => {
    const { providers, getProviders } = useContext(CareContext)
    const { notes, getNote } = useContext(NoteContext)
    const { getUserProviders, userProviders } = useContext(UserContext)

    // Initialization effect hook..
    useEffect(() => {
        getNote()

    }, [])

    useEffect(() => {
        getUserProviders()
    }, []

    )

    useEffect(() => {
        getProviders()
    }, [])

    const userNoteArray = userProviders.map(n => n)
    const providerNote = userProviders.map((up) => {
        return notes.filter(n => n.userProviderId === up.id)

    })

    // console.log(providerNote)

    return (


            providerNote.map((pn) => {
                return (
                    pn.map((p) => {
                        console.log(pn)
                        
                        return (
                            <>
                                {parseInt(p.userProviderId) === parseInt(id) &&

                                    <Note key={p.id} note={p} />}  </>
                        )
                    })
                )
            })
     
    )
}

