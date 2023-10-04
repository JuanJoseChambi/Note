import { useEffect } from "react"
import style from "./Home.module.scss"
import CreateNote from "../../Components/CreateNote/CreateNote"
import RenderNote from "../../Components/RenderNote/RenderNote"

function Home() {

  useEffect(() => {
    
  },[])


  return (
    <div className={style.homeView}>
      <CreateNote/>
      <RenderNote/>
    </div>
  )
}

export default Home