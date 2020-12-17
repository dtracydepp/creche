import React, { useContext, useRef, useEffect } from "react"
import { UserContext } from "./UserProvider"

export const NoteForm = ({ props, savedList }) => {
    const { addNote } = useContext(UserContext)
    console.log(savedList)

        //     const note = useRef(null)
        //    const user = useRef(null)
        //    const id  = useRef(null)


        //     /*
        //         Get favlist state on initialization.
        //     */
        //     useEffect(() => {
        //        getUserProviders
        //     }, [])

        //     // const constructNewProvider = () => {
        //        
        //         const userProviderId = parseInt(user.current.value)
        //         const id = parseInt(id.current.value)

        //     //     if (id === 0) 

        //     //     else {
        //     //         addNote({

        //     //            userProviderId,
        //     //            id
        //     //         })
        //     //         .then(() => props.history.push("/notes/create"))
        //     //     }
        //     // }

        //     return (
        //         <form className="noteForm">
        //             <h2 className="noteForm__title">Notes</h2>
        //             <form onSubmit={this.handleSubmit}>
//         <label>
//         Note:
//     <textarea type="text" name="note" className="form-control"
// //                         value={note.userProviderId}---not sure about this
// //                         onChange={handleControlledInputChange}>
// //                     </> 
//     </label >
//     <input type="submit" value="Submit" />
// //             </form>

// //             <button type="submit"
// //                 onClick={evt => {
//                     evt.preventDefault() // Prevent browser from submitting the form
//                     constructNewProvider()
//                 }}
//                 className="btn btn-primary">
//                 Save Note
//             </button>
//         </form>
//     )
}