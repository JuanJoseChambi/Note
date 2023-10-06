import { NoteActions, NoteState } from "../Interfaces/type";

export function NoteReducer (state: NoteState, action : NoteActions) {
    switch (action.type) {
        case "createNote":
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case "deleteNote":
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload.id)
            }
        case "updateNote":
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.payload.id) {
                        return {...note, note: action.payload}
                    }else{
                        return note
                    }
                })
            }
        default:
            return state
    }
}