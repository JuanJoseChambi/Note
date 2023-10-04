import { useEffect } from "react"
import style from "./Home.module.scss"
import Nav from "../../Components/Nav/Nav"

function Home() {

  useEffect(() => {
    
  },[])


  return (
    <div className={style.homeView}>
      <Nav/>
    </div>
  )
}

export default Home