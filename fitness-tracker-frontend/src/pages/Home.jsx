import React, { useState } from "react";
import React, { useState } from "react";
import btn from "../../public/btn.json";
import Lottie from "lottie-react";
import { useApi } from "../component/fetch";
import { useApi } from "../component/fetch";
import Displaytemplate from "../component/Displaytemplate";
import Pastworkouts from "../component/Pastworkouts";

const Home = () => {
  const { isLoading, data, isError, isFetching } = useApi("user/user");


  const [popup, setPopup] = useState();

  function modal() {
    if (data.user.gender == "Female") {
      return (
        <div className="flex  justify-center ">
          <img
            className="w-[25%] relative left-[30%] "
            src="/female.png"
            alt=""
          />
  function modal() {
    if (data.user.gender == "Female") {
      return (
        <div className="flex  justify-center ">
          <img
            className="w-[25%] relative left-[30%] "
            src="/female.png"
            alt=""
          />

          <Lottie
            onClick={handleArmsClick}
            className="w-[3%] absolute  top-[44%] right-[26%]"
            animationData={btn}
          />
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
      );
    } else {
      return (
        <div className="flex mt-10 justify-center  ">
          <img
            className="lg:w-[37%] lg:-top-10 // md:w-[40%] md:relative md:left-[30%] // w-[70%]  "
            src="/male.png"
            alt=""
          />

          <Lottie
            onClick={handleArmsClick}
            className="md:w-[5%] absolute  md:top-[34%] md:left-[67%] / w-[10%] top-[60%] left-[27%]"
            animationData={btn}
          />

          <Lottie
            onClick={handleUpperClick}
            className="md:w-[5%] absolute md:top-[30%] md:left-[80%] /   w-[10%] top-[56%] left-[49%] "
            animationData={btn}
          />

          <Lottie
            onClick={handleLegsClick}
            className="md:w-[5%] absolute md:top-[46%] md:right-[13%] /   w-[10%] top-[73%] right-[36%]"
            animationData={btn}
          />
          {/* <Legs /> */}
        </div>
      );
    }
  }

  const handleUpperClick = () => {
    setPopup(
      <Displaytemplate
        motivation={
          " Open. Sweat. Triumph. This Chest Holds Your Power. Embrace the Challenge, Push Limits, Find Your Strength Within"
        }
        setPopup={setPopup}
      />
    );
    setPopup(
      <Displaytemplate
        motivation={
          " Open. Sweat. Triumph. This Chest Holds Your Power. Embrace the Challenge, Push Limits, Find Your Strength Within"
        }
        setPopup={setPopup}
      />
    );
  };
  const handleArmsClick = () => {
    setPopup(
      <Displaytemplate
        motivation="Gains are sweeter when shared with friends. Arm day is the perfect time to celebrate our collective progress. "
        setPopup={setPopup}
      />
    );
      <Displaytemplate
        motivation="Gains are sweeter when shared with friends. Arm day is the perfect time to celebrate our collective progress. "
        setPopup={setPopup}
      />
    );
  };

  const handleLegsClick = () => {
    setPopup(
      <Displaytemplate
        motivation=" life is too short to skip Leg day! What are your plans for your legs"
        setPopup={setPopup}
      />
    );
      <Displaytemplate
        motivation=" life is too short to skip Leg day! What are your plans for your legs"
        setPopup={setPopup}
      />
    );
  };
  if (isLoading) {
    return <div>Loading... </div>;
  if (isLoading) {
    return <div>Loading... </div>;
  }
  if (isError) {
    return <div>an error has occured {isError}</div>;
  if (isError) {
    return <div>an error has occured {isError}</div>;
  }

  return (
    <div className="h-[97vh] text-[#EEF280]   flex flex-col bg-[#262626]">
      <h1 className="font-merriweather-sans font-bold mt-2 ml-10 md:text-[3rem] / text-[2rem] mb-7">
        Hello {data.user.name} <br /> What is your plan for today?
      </h1>
      <div
        className="md:w-[90vw]  md:ml-10 md:absolute bottom-[10vh] // bg-[#51505a] p-4 ml-4 rounded-lg w-[90vw] flex flex-col justify-center "


      >
        <h3 className="text-white text-2xl ml-7+ mb-4">Past Workouts</h3>
        <Pastworkouts />
      </div>
      {modal()}


      <div>{popup}</div>
    </div>
  );
};

export default Home;
