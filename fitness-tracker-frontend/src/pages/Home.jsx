import React, { useState } from "react";
import btn from "../../public/btn.json";
import Lottie from "lottie-react";
import { useApi } from "../component/fetch";
import Displaytemplate from "../component/Displaytemplate";

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
      );
    } else {
      return (
        <div className="md:flex md:justify-center  ">
          <img
            className="md:w-[33%] md:relative md:left-[30%]   "
            src="/male.png"
            alt=""
          />

          <Lottie
            onClick={handleArmsClick}
            className="md:w-[3%] absolute  md:top-[30%] md:right-[28%] / w-[12%] top-[49%] left-[17%]"
            animationData={btn}
          />

          <Lottie
            onClick={handleUpperClick}
            className="md:w-[3%] absolute md:top-[47%] md:right-[14%] /   w-[12%] top-[45%] left-[49%] "
            animationData={btn}
          />

          <Lottie
            onClick={handleLegsClick}
            className="md:w-[3%] absolute md:top-[23%] md:right-[20%] /   w-[12%] top-[60%] right-[33%]"
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
  };
  const handleArmsClick = () => {
    setPopup(
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
  };
  if (isLoading) {
    return <div>Loading... </div>;
  }
  if (isError) {
    return <div>an error has occured {isError}</div>;
  }

  return (
    <div className="h-[96.6vh] w-screen flex flex-col justify-center items-center bg-charcoal">
      <h1 className=" text-white mt-4 ml-10 md:text-[5rem] / text-[2rem] mb-7">
        Hello {data.user.name} <br /> What is your plan for today?
      </h1>
      {modal()}

      <div>{popup}</div>
    </div>
  );
};

export default Home;
