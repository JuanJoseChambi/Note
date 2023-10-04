import Button from "../Button/Button";
import style from "./Nav.module.scss";

function Nav() {

  function handlerButton (){
    console.log("Evento del Boton");
    
  }

  return (
    <div className={style.navComponent}>
      <Button onClick={handlerButton} text={"Crear Nota"}/> 
    </div>
  )
}

export default Nav