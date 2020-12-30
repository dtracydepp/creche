import React, { useContext, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import { UserContext } from "./UserProvider"
import { Note } from "./Note"
import { CareContext } from "./CareProvider"



export const NoteList = ({ id }) => {
    const { getProviders } = useContext(CareContext)
    const { notes, getNote } = useContext(NoteContext)
    const { getUserProviders, userProviders } = useContext(UserContext)
// console.log(userProviders)
    // Initialization effect hook. getUserProviers calls all of the join table objects.
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

// not using userNoteArray
    const userNoteArray = userProviders.map(n => n) 

    // notes that correspond to id of the userprovider, holding userProviders and associated note, returning notes for only for saved providers 
    const providerNote = userProviders.map((up) => {
        return notes.filter(n => n.userProviderId === up.id)

    })

    // console.log(providerNote)

    return (

//  mapping over notes for each provider then mapping over proviers to return the note comp with saved provider and note
            providerNote.map((pn) => {
                return (
                    pn.map((p) => {
                        // console.log(pn)
                        
                        return (
                            <div key={p.id}>
                                {parseInt(p.userProviderId) === parseInt(id) &&
// note comp with associated provider and note
                                    <Note key={p.id} note={p} />}  
                                    </div>
                        )
                    })
                )
            })
     
    )
}

