import { NoteActions, NoteState } from "../Interfaces/type";

export function NoteReducer (state: NoteState, action : NoteActions) {
    switch (action.type) {
        case "createNote":
            return {
                ...state,
                title: state.title = action.payload.title,
                note: state.note = action.payload.note
            }
        case "deleteNote":
            return {

            }
        case "updateNote":
            return {
                
            }
        default:
            return state
    }
}