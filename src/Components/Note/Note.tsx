import { useRef } from "react"
import style from "./Note.module.scss"
import { useFadeOnScroll } from "../../Hooks/useFadeOnScroll"

function Note() {
  const Note = useRef(null)

  useFadeOnScroll(Note, style.visibleNote)

  return (
    <div className={style.noteComponent} ref={Note}>
        <h3>Dia Feliz</h3>
        <p>Ho fue un gran dia asi que me meresco dormir</p>
    </div>
  )
}

export default Note