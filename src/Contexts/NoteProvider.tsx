import { useReducer } from "react";
import { Children, NoteState } from "../Interfaces/type";
import { NoteReducer } from "./NoteReducer";
import { NoteContext } from "./NoteContexts";

const initialState: NoteState = {
    totalNotes:0,
    notes:[
        {
            id:"123kdas",
            title:"Test de Nota",
            note:"Hola soy Juan Jose"
        }
    ]
}

export function NoteProvider ({children} : Children) {

    const [noteState, dispatch] = useReducer( NoteReducer, initialState)

    function handlerSendNote(note: object) {
        dispatch({type:"createNote", payload: note})
    }
    function handlerDeleteNote(id: string) {
        dispatch({type:"deleteNote", payload: { id }})
    }

    return (
        <NoteContext.Provider value={{noteState, handlerSendNote, handlerDeleteNote}}>
            {children}
        </NoteContext.Provider>
    )
}