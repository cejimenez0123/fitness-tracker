import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Userlogin = () => {
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
