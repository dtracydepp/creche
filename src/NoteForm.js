import React, { useContext, useRef } from "react"
import { UserContext } from "./UserProvider"

export const NoteForm = (props ) => {
    const { addNote } = useContext(UserContext)
    
// useRef will be null until input in noteform or ref (value is note object), once note is entered in ln 23 its passsed to ln 8
// and when Save note is clicked addNote runs and constructNewNote returns new note object with note that was input. text gets its value from 
// note object the current value of what was input
    const note = useRef(null)

    const constructNewNote = () => {
      
        addNote({
            userProviderId: parseInt(props.match.params.userProviderId),
            text: note.current.value
        }) .then(()=>props.history.push("/favproviders"))
    }

    return (
        <form className="note">
            <label htmlFor="associated-note"> Type Note Here</label>
            <input id="associated-note"
                type="text"
                ref={note}
            />
            <button onClick={evt => {
                evt.preventDefault()
                constructNewNote()
            }}>Save Note</button>

        </form>
    )


    
}