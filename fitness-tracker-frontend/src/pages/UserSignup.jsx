import React from "react";
import axios from "axios";
import { useState } from "react";
import gym from "../../public/gym.jpg";
import Enviroment from "../core";
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
    <div>
    <div className="flex md:flex-col justify-center h-screen w-screen  ">
      <span className="flex  text-center items-center justify-center md:flex-row md:static / flex-col-reverse w-screen relative ">
        <form
          className=" mx-auto w-3/5 space-y-6 h-1/2 grid content-center "
          onSubmit={handleSubmit}
        >
          <div className="relative ">
            <input
              id="name"
              type="name"
              name="name"
              className="border-b bg-transparent w-96 py-1 focus:outline-none focus:border-fore focus:border-b-2 transition-colors peer"
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
              className="border-b bg-transparent w-96 py-1 focus:outline-none focus:border-fore focus:border-b-2 transition-colors peer"
              autoComplete="off"
              onChange={(e) => handleEmail(e)}
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
              className="border-b bg-transparent w-96 py-1 focus:outline-none focus:border-fore focus:border-b-2 transition-colors peer"
              autoComplete="off"
              onChange={(e) => handlePassword(e)}
              value={password}
            />
          </label>

          <span>
            <label className="text-xl w-1/2  label text-[#060B0E]" htmlFor="">
              Male
              <input
                className="checkbox border border-solid border-fore"
                type="radio"
                name="options"
                value="Male"
                checked={gender === "Male"}
                onChange={handleOptionChange}
                className="radio"
                defaultChecked
              />
            </label>
            <label className="text-xl w-1/2 label text-[#060B0E]">
              Female
              <input
                className="checkbox border border-solid border-fore"
                type="radio"
                name="options"
                value="Female"
                checked={gender === "Female"}
                onChange={handleOptionChange}
                className="radio"
              />
            </label>
          </span>

          <button
            className="btn btn-info bg-[#060B0E] text-[#f4f3f2]"
            type="submit"
          >
            Submit
          </button>
        </form>
        <img
          className="md:w-[43%]  md:h-[100.8%]  rounded-r-3xl md:static /   h-screen absolute w-screen  / 2xl:w-[28%] 2xl:h-[80%] xl:object-cover"
          src={gym}
          alt="welcome to this gym "
        />
      </span>
    </div>
    <div className='flex-1 w-[44%]'>
    <img className=" hidden ml:block" src={gym} alt="image of a dumbell" />
      </div>
      </div>
  )
}

export default UserSignup;

