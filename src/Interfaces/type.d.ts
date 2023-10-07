import { MouseEventHandler, ReducerWithoutAction } from "react"

export interface Children {
    children: JSX.Element | JSX.Element[]
}


// Button
export interface ButtonInt {
    text:string
    onClick: MouseEventHandler<HTMLButtonElement>
}

// Estado Context
export interface Note {
    id:string
    title:string
    note:string
}

export interface NoteState {
    totalNotes:number
    notes:Note[]
}

// PropContext
export interface NoteContextProp {
    noteState: NoteState
    handlerSendNote: (note:object) => ReducerWithoutAction
    handlerDeleteNote: (id: string) => ReducerWithoutAction
    handlerUpdateNote: (id: string) => ReducerWithoutAction
}

// Note Actions (Reducer)
export type NoteActions = 
    | {type:"createNote", payload: Note}
    | {type:"deleteNote", payload: {id: string}}
    | {type:"updateNote", payload: {id: string}}

