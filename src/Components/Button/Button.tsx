import { ButtonInt } from "../../Interfaces/type"
import style from "./Button.module.scss"

function Buttons({text, onClick}: ButtonInt) {
  return (
    <button onClick={onClick} className={style.buttonComponent}>
      {text}
    </button>
  )
}

export default Buttons