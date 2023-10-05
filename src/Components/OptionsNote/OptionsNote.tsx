import Button from "../Button/Button";
import style from "./OptionsNote.module.scss";

function OptionsNote() {
    function handlerButton () {
        console.log("Evento");
    }

  return (
    <div className={style.optionsComponent}>
        <h1 className={style.titleNote}>Note</h1>
        <div className={style.containerComponents}>
            <Button text="Create Note" onClick={handlerButton}/>
            <Button text="Update Note" onClick={handlerButton}/>
            <Button text="Create Note" onClick={handlerButton}/>
        </div>
    </div>
  )
}

export default OptionsNote