import React, { useContext,useEffect, useState } from "react";
import btn from "../../public/btn.json";
import Lottie from "lottie-react";
import axios from "axios";
import Legs from "../component/Legs";
import { ProtectedRoutes } from "../component/ProtectedRoutes";
import { useLoaderData } from "react-router-dom";
const Home = () => {

  const {currentUser } = useContext(ProtectedRoutes);
  const [popup, setPopup] = useState();

  


  const handleUpperClick = () => {
    console.log("legs");
   setPopup(

     <Legs setPopup={setPopup} />
   )
    
    
    
  };
  const handleArmsClick = () => {
    console.log("upper");
  };
  const handleLegsClick = () => {
    console.log("arms");
  };
  return (
    <div className="flex flex-row" >
      <div className="w-3/4">
      <h1 className=" mt-10 ml-10 text-4xl">
        Hello {currentUser.name}  <br /> What is your plan for today
      </h1>
      </div>
      <div className=" w-2/5   ">
      <img className=" relative w-8/9  " src="/male.png" alt="" />

        <Lottie
          onClick={handleArmsClick}
          className="w-[3%] absolute  top-[30%] right-[28%]"
          animationData={btn}
        />

        <Lottie
          onClick={handleUpperClick}
          className="w-[3%] absolute top-[47%] right-[14%] "
          animationData={btn}
        />

        <Lottie
          onClick={handleLegsClick}
          className="w-[3%] absolute top-[23%] right-[20%]"
          animationData={btn}
        />
        {/* <Legs /> */}
      </div>
      <div>{popup}</div>
    </div>
  );
};

export default Home;
