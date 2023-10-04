import { Routes, Route } from "react-router-dom"
// import './App.css'
import Home from "./View/Home/Home"
import Login from "./View/Home/Home"

function App() {

  return (
    <>
      <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App
