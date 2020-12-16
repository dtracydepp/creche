import React, { useContext, useRef, useEffect } from "react"
import { UserContext } from "./UserProvider"

export const NoteForm = ({props,savedList}) => {
    const { addNote } = useContext(UserContext)
    console.log(savedList)
    
//     const note = useRef(null)
    

//     /*
//         Get favlist state on initialization.
//     */
//     useEffect(() => {
//        getUserProviders
//     }, [])

//     // const constructNewProvider = () => {
//        
//         const userProviderId = parseInt(userProviders.current.value)
//         const userId = parseInt(userProviders.current.value)

//     //     if (Id === ) 
           
//     //     else {
//     //         addNote({
               
//     //            userProviderId,
//     //            userId
//     //         })
//     //         .then(() => props.history.push("/notes"))
//     //     }
//     // }

//     return (
//         <form className="noteForm">
//             <h2 className="noteForm__title">Notes</h2>
//             <fieldset>
//             <textarea type="text" name="note" className="form-control"
//                         value={note.userProviderId}
//                         onChange={handleControlledInputChange}>
//                     </textarea>
//             </fieldset>
               
//             <button type="submit"
//                 onClick={evt => {
//                     evt.preventDefault() // Prevent browser from submitting the form
//                     constructNewProvider()
//                 }}
//                 className="btn btn-primary">
//                 Save Note
//             </button>
//         </form>
//     )
}