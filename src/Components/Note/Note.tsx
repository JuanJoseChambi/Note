import style from "./Note.module.scss"

function Note() {
  return (
    <div className={style.noteComponent}>
        <h3>Dia Feliz</h3>
        <p>Ho fue un gran dia asi que me meresco dormir</p>
    </div>
  )
}

export default Note