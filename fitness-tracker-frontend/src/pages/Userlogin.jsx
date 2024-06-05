import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    <div className='flex flex-col justify-center h-screen'>
      <span className='flex  text-center items-center justify-center '>

     <form className='bg-cyan-950 p-10 rounded-l-3xl h-[60.8vh] w-[20vw] flex flex-col justify-center' onSubmit={(e)=>handleSubmit(e)} >
      <h1>Log in </h1>
      <p>welcome back please enter your details </p>
     <label className="input  input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" value={email} className=" grow " placeholder="Enter your Email"  onChange={(e)=>handleEmail(e)} />
</label>
     
        <label className="input mt-4 input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow" value={password}  onChange={(e)=>handlePassword(e)} />
  </label>
    
        <button type='submit'>Submit</button>
        <p>Dont have an account </p>
        <Link className='underline mt-4 border-4 w-1/2 btn btn-outline btn-accent' to="/signin">Sign Up</Link>
      </form>
      <img className='w-[25vw] h-[60.8vh]  rounded-r-3xl' src="/LoginImage.jpg" alt="welcome to this bitch " />
      </span>
    </div>
  )
}

export default Userlogin
