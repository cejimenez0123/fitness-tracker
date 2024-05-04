import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      
      <h1>Vite + React</h1>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" value={email} placeholder='email' name="email"
          onChange={(e)=>handleEmail(e)}/>
        <input type="text" value={password}placeholder="password" onChange={(e)=>handlePassword(e)}
        name="password"/>
        <button type='submit'>Submit</button>
      </form>
     
    </>
  )
}

export default App
