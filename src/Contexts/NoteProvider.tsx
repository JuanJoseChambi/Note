import { useReducer } from "react";
import { Children, NoteState } from "../Interfaces/type";
import { NoteReducer } from "./NoteReducer";
import { NoteContext } from "./NoteContexts";

let initialState: NoteState = {
    totalNotes:0,
    notes:[
        {
            id:"123kdas",
            title:"Test de Nota",
            note:"Hola soy Juan Jose"
        }
    ]
}

export function NoteProvider ({children} : Children): JSX.Element {

    const [noteState, dispatch] = useReducer( NoteReducer, initialState)

    function handlerSendNote(note: object) {
        dispatch({type:"createNote", payload: note})
    }
    function handlerDeleteNote(id: string) {
        dispatch({type:"deleteNote", payload: { id }})
    }
    function handlerUpdateNote (id: string) {
        dispatch({type:"updateNote", payload: {id}})
    }

    return (
        <NoteContext.Provider value={{noteState, handlerSendNote, handlerDeleteNote, handlerUpdateNote}}>
            {children}
        </NoteContext.Provider>
    )
}