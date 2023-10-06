import { useReducer } from "react";
import { Children, NoteState } from "../Interfaces/type";
import { NoteReducer } from "./NoteReducer";
import { NoteContext } from "./NoteContexts";

const initialState: NoteState = {
    id: "",
    title:"",
    note:"",
}

export function NoteProvider ({children} : Children) {

    const [noteState, dispatch] = useReducer(NoteReducer, initialState)

    function handlerSendNote (note: object) {
        // dispatch({type:"createNote", payload: note})
    }

    return (
        <NoteContext.Provider value={{noteState, handlerSendNote}}>
            {children}
        </NoteContext.Provider>
    )

}