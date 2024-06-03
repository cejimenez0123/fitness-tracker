import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ProtectedRoutes, ProtectedRouteProvider } from "../component/ProtectedRoutes.jsx";

const Userlogin = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handlePassword = (e)=>{
    // console.log(e.target.value)
    setPassword(e.target.value)
  }

  const navigate = useNavigate();
  const handleEmail = (e)=>{ 
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
   await axios({
      method: 'post',
      url: "http://localhost:3000/user/login", 
      data: {email:email,password:password}
    }).then(res=>{
      localStorage.setItem("token",res.data.token)
      console.log(res.data.userInfo)

      navigate("/home")
    })
    console.log(localStorage.getItem("token"))

  }
  return (
    <div>
      <h1>Log in </h1>
      <p>welcome back please enter your details </p>
     <form onSubmit={(e)=>handleSubmit(e)} >
     <label htmlFor="">
        Email
      </label>
        <input type="text" value={email} placeholder='enter your email' name="email"
          onChange={(e)=>handleEmail(e)}/>
           <label htmlFor="">
        Password
      </label>
        <input type="text" value={password}placeholder="password" onChange={(e)=>handlePassword(e)}
        name="password"/>
        <button type='submit'>Submit</button>
        <p>dont have an account signup</p>
      </form>
    </div>
  )
}

export default Userlogin
