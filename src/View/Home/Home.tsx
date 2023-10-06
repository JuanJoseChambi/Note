import { useEffect } from "react"
import style from "./Home.module.scss"
import RenderNote from "../../Components/RenderNote/RenderNote"
import OptionsNote from "../../Components/OptionsNote/OptionsNote"

function Home() {

  useEffect(() => {
    
  },[])
  
  return (
    <div className={style.homeView}>
      <OptionsNote/>
      <RenderNote/>
    </div>
  )
}

export default Home