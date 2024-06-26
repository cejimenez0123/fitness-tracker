import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SelectedModal from "./SelectedModal";
import Enviroment from "../core";
import { useApi } from "./fetch";
const Pastworkouts = () => {
  const { isLoading, data, isError, isFetching } = useApi("log");

  const [logs, setLogs] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const formatDate = new Intl.DateTimeFormat("en-US", {
    // dateStyle: "full",
    weekday: "short"
  });
  console.log(data);
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        // const logRes = await axios.get(`${Enviroment.PROD_URL}/log`, {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // });

        // const logsData = logRes.data.logs;
        // setLogs(logsData);

        // const workoutPromises = logsData.map((log) =>{

        //   axios.get(`http://localhost:3000/log/${log.id}/workout`, {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem("token")}`,
        //     },
        //   })}
          
        // );
        
// console.log(workoutPromises);
// console.log(logsData);
        // const workoutResponses = await Promise.all(workoutPromises);
        // const workoutsData = data.logs.map((response) => {
        //     return response;
        //   })
        // setWorkouts(workoutsData);
        // setIsLoading(false);
      } catch (error) {
        console.error("Error fetching workouts:", error);
        // setIsError(true);
        // setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, []);
  const nextSlide = () => {
   console.log("hi")
  };

  const prevSlide = () => {
   console.log("hi");
  };
  const handlebtn = (workout) => {
    // document.getElementById("my_modal_2").showModal();
    
    setSelected(workout);
  };
  if (isLoading) {
    return <div>Loading... </div>;
;
  }
  if (isError) {
    return <div>an error has occured {isError}</div>;

  }


  return (
    <div className="flex  justify-center items-center ">
      <button
          onClick={prevSlide}
          className=" md:h-20 // bg-[#A79BF2]  text-[#262626] px-4 py-2 mr-2 rounded"
        >
          &lt;
        </button>
      <div className="md:w-[30rem] //  text-[#262626] carousel w-[15rem] carousel-end rounded-box">
        {data.logs.map((workout, index) => {
          return (
            <>
              <div key={index} className="md:w-10 md:h-10 // bg-[#E2BDF2] rounded-full  ml-2 p-5 carousel-item w-4 h-4">
                <button
                  onClick={() => handlebtn(workout)}
                  className=" md:w-10 // w-2"
                >
                  {formatDate.format(new Date(workout.date))}
                </button>
              </div>
            </>
          );
          })}
          {console.log(selected)}
            {selected && 
      
           ( <SelectedModal selected={selected} setSelected={setSelected}/> )
            }
      </div>
   
        
        <button
          onClick={nextSlide}
          className="bg-[#A79BF2] ml-2 text-[#262626] px-4 py-2 rounded"
        >
      &gt;
        </button>

    </div>
  );
};

export default Pastworkouts;
