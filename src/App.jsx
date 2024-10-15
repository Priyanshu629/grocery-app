import { Outlet } from "react-router-dom"
import Header from "./compoenets/Header"
import "./App.css"




const App = () => {

  
  return (
    <div className=" w-full">
  <Header/>
  <Outlet/>
    </div>
  )
}

export default App
