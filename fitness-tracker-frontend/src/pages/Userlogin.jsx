import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ProtectedRoutes,
  ProtectedRouteProvider,
} from "../component/ProtectedRoutes.jsx";
import gym from "../../public/gym.jpg";
import Enviroment from "../core.jsx";
const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    // console.log(e.target.value)
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:3000" + "/user/login",
      data: { email: email, password: password },
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data.userInfo);

      navigate("/home");
    });
    console.log(localStorage.getItem("token"));
  };
  return (
    <div className="flex flex-row">
      <div className="flex-1 w-[46%] bg-[#f4f3f2]  text-center">
        <h1 className="mt-16 text-3xl text-teal-950">Log in </h1>

        <p className="text-teal-950">welcome back please enter your details </p>
        <form
          className="w-1/2 space-y-4  text-teal-950 m-auto h-1/2 form-control"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="border-b  text-fore bg-transparent w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            value={email}
            placeholder="Enter your email"
            name="Email"
            onChange={(e) => handleEmail(e)}
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            className="border-b bg-transparent w-96 py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
            value={password}
            placeholder="Password"
            onChange={(e) => handlePassword(e)}
            name="password"
          />
          <button className="btn bg-fore text-back btn-info" type="submit">
            Submit
          </button>
          <p>dont have an account signup</p>
        </form>
      </div>
      <div className="flex-1 w-[54%] ">
        <img src={gym} />
      </div>
    </div>
  );
};

export default Userlogin;
