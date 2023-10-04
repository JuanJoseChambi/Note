import style from "./CreateNote.module.scss"

function CreateNote() {
  return (
    <div className={style.createNoteComponent}>
        <h1 className={style.titleNote}>Note</h1>
        <form className={style.containerCreate}>
            <h3>Create Note</h3>
            <div>
                <label>Titulo</label>
                <input type="text" />
            </div>
            <div>
                <label>Nota</label>
                <input type="text"/>
            </div>
        </form>
    </div>
  )
}

export default CreateNote