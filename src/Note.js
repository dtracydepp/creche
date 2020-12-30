import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"

// listening for delete to be clicked if so deleteNote is called fetches notes by id 
// and only deletes that note from the object then runs getNotes and returns a new object without the deleted note.
export const Note = ({ note }) => {
    const { deleteNote } = useContext(NoteContext)
    return (

        <ul>
            <li>{note.text}
                <button onClick={() => { deleteNote(note.id) }}>Delete</button></li>
        </ul>
    )
}