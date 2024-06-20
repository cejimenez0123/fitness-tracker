import React from "react";
import axios from "axios";
import { useState } from "react";

import gym from "../../public/gym.jpg";
import { Link } from "react-router-dom";
const UserSignup = () => {
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    axios({
      method: "post",
      url: "http://localhost:3000/user/register",
      data: { email: email, password: password, name: name, gender: gender },
    }).then((res) => {
      console.log(res.data);
    });
  };
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
    <div className="flex md:flex-col justify-center h-screen w-screen  ">
      <span className="flex  text-center items-center justify-center md:flex-row md:static / flex-col-reverse w-screen relative ">
        <form
          className="bg-slate-900 p-10 rounded-l-3xl md:w-[45%]  md:h-[100.8%] flex flex-col md:rounded-r-none justify-center gap-3 md:static md:z-0 / z-10
           w-[100vw]  absolute bottom-0 h-1/2 rounded-r-3xl / 2xl:w-[28%] 2xl:h-[80%]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="name"
              onChange={(e) => handleName(e)}
              value={name}
              className="grow"
              placeholder="Username"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              name="email"
              value={email}
              onChange={(e) => handleEmail(e)}
              placeholder="Email"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              name="password"
              onChange={(e) => handlePassword(e)}
              className="grow"
              value={password}
            />


          </label>

          <span className="flex justify-center gap-2 ">
            <label htmlFor="">
              <input
                type="radio"
                name="options"
                value="Male"
                checked={gender === "Male"}
                onChange={handleOptionChange}
                className="radio"
              defaultChecked
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="options"
                value="Female"
                checked={gender === "Female"}
                onChange={handleOptionChange}
                className="radio"
              />
              Female
            </label>
          </span>
          <button className="btn btn-info" type="submit">
            Submit
          </button>
          <div className="flex gap-2 flex-col justify-center items-center mt-4">
            <p>Aleady have an account?</p>
            <Link
              className=" btn btn-outline  btn-accent md:w-[10vw] h-[3vh]  p-1 flex flex-row justify-center / w-40 mt-4"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
        <img
          className="md:w-[43%]  md:h-[100.8%]  rounded-r-3xl md:static /   h-screen absolute w-screen  / 2xl:w-[28%] 2xl:h-[80%] xl:object-cover"
          src={gym}
          alt="welcome to this bitch "
        />
      </span>

        
    </div>
  );
};

export default UserSignup;
