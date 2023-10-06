import { MouseEventHandler } from "react"

export interface Children {
    children: JSX.Element | JSX.Element[]
}


// Button
export interface ButtonInt {
    text:string
    onClick: MouseEventHandler<HTMLButtonElement>
}

// Estado Context
export interface NoteState {
    id:string
    title:string
    note:string
}

// PropContext
export interface NoteContextProp {
    noteState: NoteState
    handlerNote: (id:string) => void
}

// Note Actions (Reducer)
export type NoteActions = 
    | {type: "createNote", payload: NoteState}
    | {type: "deleteNote", payload: {id: string}}
    | {type: "updateNote", payload: {id: string}}

