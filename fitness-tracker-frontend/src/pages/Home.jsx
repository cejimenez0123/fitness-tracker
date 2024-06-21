import React, {  useState } from "react";
import btn from "../../public/btn.json";
import Lottie from "lottie-react";
import {useApi} from "../component/fetch";
import Displaytemplate from "../component/Displaytemplate";

const Home = () => {

  const { isLoading, data, isError, isFetching } = useApi("user/user");

 
  // console.log(data)
  const [popup, setPopup] = useState( <Displaytemplate
    motivation={" life is too short to skip Leg day! What are your plans for your legs"}

    />);

  
function modal(){
 if (data.user.gender=="Female"){
    return(

    <div className="flex justify-center hidden  ml:block">
    <img className="w-[25%] relative left-[30%] " src="/female.png" alt="" />

      <Lottie
        onClick={handleArmsClick}
        className="w-[3%] absolute  top-[44%] right-[26%]"
        animationData={btn}
      />

      <Lottie
        onClick={handleLegsClick}
        className="w-[3%] absolute top-[57%] right-[15%] "
        animationData={btn}
      />

      <Lottie
        onClick={handleUpperClick}
        className="w-[3%] absolute top-[35%] right-[20%]"
        animationData={btn}
      />
      {/* <Legs /> */}
    </div>
    )
  }else{
    return(

      <div className="flex justify-center hidden  ml:block">
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
      )
  }
}

  const handleUpperClick = () => {
    // console.log("legs");
   setPopup(

     <Displaytemplate
     motivation={" Open. Sweat. Triumph. This Chest Holds Your Power. Embrace the Challenge, Push Limits, Find Your Strength Within"}

      setPopup={setPopup}/>
   )
    
    
    
  };
  const handleArmsClick = () => {
    setPopup(

      <Displaytemplate 
      motivation="Gains are sweeter when shared with friends. Arm day is the perfect time to celebrate our collective progress. "
      
      setPopup={setPopup}/>
    )
     
  };
  const handleLegsClick = () => {
    setPopup(

      <Displaytemplate 
      motivation=" life is too short to skip Leg day! What are your plans for your legs"
       setPopup={setPopup}/>
    )
     
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
    <div className="h-screen bg-charcoal" >
      <h1 className=" text-white  pt-16 ml-10  text-2xl ml:text-7xl">
        Hello {data.user.name} <br /> What is your plan for today?
      </h1>
      {modal()}
     
      <div>{popup}</div>
    </div>
  );
};

export default Home;
