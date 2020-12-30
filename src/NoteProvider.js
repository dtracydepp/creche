import React, { useState, useEffect } from "react"

// context is imported and used by components to get data

export const NoteContext = React.createContext()

// pulls data from API
// useState setting the variable initial state to an empty array and then putting things into that array so 
// I have access to that information later in my code.
export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNote = () => {
        return fetch("http://localhost:8088/notes")
        .then(res => res.json())
        // setting state of notes
            .then(setNotes)
    }

    const deleteNote = (noteid) => {
        return fetch(`http://localhost:8088/notes/${noteid}`,{
            method: "DELETE"
        })
        
            .then(getNote)
    }
    
    /*
        Returns a context provider which has the
        `hotes`state and the `setNotes`, "getNote", "deleteNote" functions as keys. This
        allows any child elements to access them.
    */
    return (
        <NoteContext.Provider value={{
           notes, setNotes, getNote, deleteNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}
