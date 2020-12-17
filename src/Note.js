import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"

export const Note = ({note}) => {
    const {deleteNote} = useContext(NoteContext)
   return (

       <ul>
    <li>{note.text}
    <button onClick={()=>{deleteNote(note.id)}}>Delete</button></li>
</ul>
        ) 
}