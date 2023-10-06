import { useContext } from "react";
import { NoteContext } from "../Contexts/NoteContexts";

export function useNotes () {
    const { noteState, handlerSendNote } = useContext(NoteContext)
    const { notes } = noteState
    return {
        notes, handlerSendNote
    }
}