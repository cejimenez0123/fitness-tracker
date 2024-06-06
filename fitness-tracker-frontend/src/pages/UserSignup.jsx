import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import gym from "../../public/gym.jpg"
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
    console.log(email ,password, name,);
    axios({
      method: 'post',
      url: "http://localhost:3000/user/register", 
      data: {email:email,password:password,name:name,gender:gender}
    }).then(res=>{
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
  
    <div className='flex justify-center items-center  content-center '>
      <form className='bg-slate-900 w-[30%] h-[62.5rem] p-7 grid content-center ' onSubmit={handleSubmit} >
      <div className="relative ">
                  <input
                    id="name"
                    type="name"
                    name="name"
                    className="border-b bg-transparent w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                    onChange={(e) => handleName(e)}
                    value={name}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0  text-gray-600 cursor-text transition-all ${
                      isInputFilled(name)
                        ? "bottom-[1.6rem] text-xs text-purple-600"
                        : "peer-focus:text-xs peer-focus:-top-4 top-1 peer-focus:text-purple-600"
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
                    className="border-b bg-transparent w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                    autoComplete="off"
                    onChange={(e)=>handleEmail(e)}
                    value={email}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0  text-gray-600 cursor-text transition-all ${
                      isInputFilled(email)
                        ? "bottom-[1.6rem] text-xs text-purple-600"
                        : "peer-focus:text-xs peer-focus:-top-4 top-1 peer-focus:text-purple-600"
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
                    className="border-b bg-transparent w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                    autoComplete="off"
                    onChange={(e)=>handlePassword(e)}
                    value={password}
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0  text-gray-600 cursor-text transition-all ${
                      isInputFilled(password)
                        ? "bottom-[1.6rem] text-xs text-purple-600"
                        : "peer-focus:text-xs peer-focus:-top-4 top-1 peer-focus:text-purple-600"
                    }`}
                  >
                    Password
                  </label>
                </div>
  
    

     
<span>

        <label htmlFor="">


        <input
          type="radio"
          name="options"
          value="Male"
          checked={gender === 'Male'}
          onChange={handleOptionChange}/>
          male
        </label>
          <label>
          <input
            type="radio"
            name="options"
            value="Female"
            checked={gender === 'Female'}
            onChange={handleOptionChange}
          />
          Female
          </label>
</span>

        <button className="btn btn-info" type='submit'>Submit</button>
        
      </form>
      <img className='w-[40%]' src={gym} alt="image of a dumbell
      " />
    </div>
  )
}

export default UserSignup
