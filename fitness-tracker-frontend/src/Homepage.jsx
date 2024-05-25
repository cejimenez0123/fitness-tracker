import React, { useEffect, useState } from "react";
import btn from "../public/btn.json";
import Lottie from "lottie-react";
import axios from "axios";
import Legs from "../src/component/Legs";
const Homepage = () => {
  const [popup, setPopup] = useState();
  let data;

  // axios.get("http://localhost:3000/user").then((response) => {
  //   // console.log(response.data)
  //   data = response.data;
  // });
  // console.log(data)

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
    <div>
      <h1 className=" mt-10 text-4xl">
        hello persons names what is your plan for today
      </h1>
      <div className="flex justify-center relative">
        <Lottie
          onClick={handleArmsClick}
          className="w-[8%] absolute top-[22%] left-[39%]"
          animationData={btn}
        />

        <img className="w-[83%] flex justify-center " src="/female.png" alt="" />
        <Lottie
          onClick={handleUpperClick}
          className="w-[9%] absolute top-[50%] right-[33%] "
          animationData={btn}
        />

        <Lottie
          onClick={handleLegsClick}
          className="w-[8%] absolute top-[30%] right-[24%]"
          animationData={btn}
        />
        {/* <Legs /> */}
      </div>
      <div>{popup}</div>
    </div>
  );
};

export default Homepage;
