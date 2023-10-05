import style from "./CreateNote.module.scss"

function CreateNote() {
  return (
    <form className={style.createNoteComponent}>
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
  )
}

export default CreateNote