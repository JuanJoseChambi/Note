import { useEffect } from "react"
import { useFade } from "../../Hooks/useFade"
import { ButtonInt } from "../../Interfaces/type"
import style from "./Button.module.scss"

function Buttons({text, onClick}: ButtonInt) {
  const { visible, handlerVisible } = useFade()

  useEffect(() => {
    handlerVisible()
  }, [])
  
   
  return (
    <button onClick={onClick} className={`${style.buttonComponent} ${visible ? style.visibleButtons : null}`}>
      {text}
    </button>
  )
}

export default Buttons