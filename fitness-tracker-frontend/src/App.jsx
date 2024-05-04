import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Homepage from './Homepage'
import './App.css'
import Enviroment from './core'
import axios from "axios"
function App() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handlePassword = (e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  const handleEmail = (e)=>{ 
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handleRegister= (e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: Enviroment.BASE_URL + "/user/register", 
      data: {email:email,password:password,name:"Christian"}
    }).then(res=>{
      console.log(res.data)
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios({
      method: 'post',
      url: Enviroment.BASE_URL + "/user/login", 
      data: {email:email,password:password}
    }).then(res=>{
      localStorage.setItem("token",res.data.token)
      console.log(res.data)
    })
  }
  return (
    <>
            <h1 className="text-3xl text-center font-bold underline">
      Hello world!
    </h1>
    <Homepage/>
      
     
    </>
  )
}

export default App
