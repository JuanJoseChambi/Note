import { useContext } from "react";
import { NoteContext } from "../Contexts/NoteContexts";

export function useNotes () {
    const { noteState, handlerSendNote, handlerDeleteNote } = useContext(NoteContext)
    const { notes } = noteState
    return {
        notes, handlerSendNote, handlerDeleteNote
    }
}