import React, { useState, useEffect } from "react"

// context is imported and used by components to get data

export const NoteContext = React.createContext()

// pulls data from API

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNote = () => {
        return fetch("http://localhost:8088/notes")
        .then(res => res.json())
            .then(setNotes)
    }

    const deleteNote = (noteid) => {
        return fetch(`http://localhost:8088/notes/${noteid}`,{
            method: "DELETE"
        })
        
            .then(getNote)
    }
    
    
    return (
        <NoteContext.Provider value={{
           notes, setNotes, getNote, deleteNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}
