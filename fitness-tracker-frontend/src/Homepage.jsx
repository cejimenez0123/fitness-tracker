import React from "react";
import female from "../public/female.png";
import btn from "../public/btn.json";
import Lottie from "lottie-react";
const Homepage = () => {
  const handleUpperClick = () => {
    console.log("arms");
  };
  const handleArmsClick=()=>{
console.log("upper");
  }
  const handleLegsClick=()=>{
console.log("legs");
  }
  return (
    <div>
      <h1 className=" mt-10 text-4xl">
        hello persons names what is your plan for today
      </h1>
      <div className="flex justify-center relative">
        <Lottie onClick={handleArmsClick} className="w-[3%] absolute top-[20%] left-[46%]" animationData={btn} />

        <img className="w-1/4 flex justify-center 4" src={female} alt="" />
        <Lottie onClick={handleUpperClick} className="w-[3%] absolute top-[23%] right-[44%] " animationData={btn} />

        <Lottie onClick={handleLegsClick} className="w-[3%] relative top-[40%] right-[10%]" animationData={btn} />
      </div>
    </div>
  );
};

export default Homepage;
