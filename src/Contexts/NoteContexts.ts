import { createContext } from "react";
import { NoteContextProp } from "../Interfaces/type";

export const NoteContext = createContext<NoteContextProp>({} as NoteContextProp )