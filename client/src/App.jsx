import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./index.css"
import axios from "axios"


axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.withCredentials = true


function App() {


  return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes></>
      

  )
}

export default App
