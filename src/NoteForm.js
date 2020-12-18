import React, { useContext, useRef, useEffect } from "react"
import { UserContext } from "./UserProvider"

export const NoteForm = (props ) => {
    const { addNote } = useContext(UserContext)
    

    const note = useRef(null)

    const constructNewNote = () => {
        // holds the variable that was declared in the url is stored
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