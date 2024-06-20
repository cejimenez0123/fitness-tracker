import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import gym from "../../public/gym.jpg"
import Enviroment from '../core';
const UserSignup = () => {
  const [gender, setGender] = useState("male");
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const handlePassword = (e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  const handleName = (e)=>{
    console.log(e.target.value)
    setName(e.target.value)
  }
  const handleEmail = (e)=>{ 
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(email ,password, name,gender);
    axios({
      method: 'post',
      url: Enviroment.BASE_URL+"/user/register", 
      data: {email:email,password:password,name:name,gender:gender}
    }).then(res=>{
      if(res.data.token!==undefined){
        
      }
      console.log(res.data)
    })
  }
  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   axios({
  //     method: 'post',
  //     url: "http://localhost:3000/login", 
  //     data: {email:email,password:password}
  //   }).then(res=>{
  //     localStorage.setItem("token",res.data.token)
  //     console.log(res.data)
  //   })
  // }
  const handleOptionChange = (event) => {
    setGender(event.target.value);
  };
  const isInputFilled = (inputValue) => {
    return inputValue.trim() !== "";
  };
  return (
  <div className='flex flex-row'>
 
    <div className='flex  w-screen pt-16 ml:w-[46%] h-screen
     bg-[#f4f3f2]   '>
      <form className=' mx-auto w-2/3 w-fit  space-y-6 h-1/2 grid content-center ' onSubmit={handleSubmit} >
      <div className="relative ">
                  <input
                    id="name"
                    type="name"
                    name="name"
                    className="border-b border-PrussianBlue bg-transparent w-96 py-1 focus:outline-none focus:border-fore focus:border-b-2 transition-colors peer"
                    onChange={(e) => handleName(e)}
                    value={name}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0  text-gray-600 cursor-text transition-all ${
                      isInputFilled(name)
                        ? "bottom-[1.6rem] text-xs text-fore"
                        : "peer-focus:text-xs peer-focus:-top-4 top-1 peer-focus:text-fore"
                    }`}
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative mt-5">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="border-b border-PrussianBlue bg-transparent w-96 py-1 focus:outline-none focus:border-fore focus:border-b-2 transition-colors peer"
                    autoComplete="off"
                    onChange={(e)=>handleEmail(e)}
                    value={email}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0  text-gray-600 cursor-text transition-all ${
                      isInputFilled(email)
                        ? "bottom-[1.6rem] text-xs text-fore"
                        : "peer-focus:text-xs peer-focus:-top-4 top-1 peer-focus:text-fore"
                    }`}
                  >
                    Email
                  </label>
                </div>
      <div className="relative mt-5">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="border-b border-PrussianBlue bg-transparent w-96 py-1 focus:outline-none focus:border-fore focus:border-b-2 transition-colors peer"
                    autoComplete="off"
                    onChange={(e)=>handlePassword(e)}
                    value={password}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0   text-gray-600 cursor-text transition-all ${
                      isInputFilled(password)
                        ? "bottom-[1.6rem] text-xs text-fore"
                        : "peer-focus:text-xs peer-focus:-top-4 top-1 peer-focus:text-fore"
                    }`}
                  >
                    Password
                  </label>
                </div>
  

        <button className="btn btn-info bg-PrussianBlue text-[#f4f3f2]" type='submit'>Submit</button>
        
      </form>
  
      
    </div>
    <div className='flex-1 w-[44%]'>
    <img className=" hidden ml:block" src={gym} alt="image of a dumbell" />
      </div>
    </div>
  )
}

export default UserSignup