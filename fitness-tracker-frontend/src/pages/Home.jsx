import React, {  useState } from "react";
import btn from "../../public/btn.json";
import Lottie from "lottie-react";
import {useApi} from "../component/fetch";
import Legs from "../component/Legs";

const Home = () => {

  const { isLoading, data, isError, isFetching } = useApi("user/user");

 
  // console.log(data)
  const [popup, setPopup] = useState();

  


  const handleUpperClick = () => {
    // console.log("legs");
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
  if(isLoading){
    return(
  
      <div>Loading... </div>
    )
  }
  if(isError){
    return(
  
      <div>an error has occured {isError}</div>
    )
  }
  return (
    <div >
      <h1 className=" mt-10 ml-10 text-[5rem]">
        Hello {data.user.name}  <br /> What is your plan for today
      </h1>
      <div className="flex justify-center ">
      <img className="w-[33%] relative left-[30%] " src="/male.png" alt="" />

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
