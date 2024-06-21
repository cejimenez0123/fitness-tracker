import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SelectedModal from "./SelectedModal";
const Pastworkouts = () => {
  const [logs, setLogs] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selected, setSelected] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const formatDate = new Intl.DateTimeFormat("en-US", {
    // dateStyle: "full",
    weekday: "short"
  });
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const logRes = await axios.get(`http://localhost:3000/log`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const logsData = logRes.data.logs;
        setLogs(logsData);

        const workoutPromises = logsData.map((log) =>{

          axios.get(`http://localhost:3000/log/${log.id}/workout`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })}
          
        );
        
console.log(workoutPromises);
console.log(logsData);
        const workoutResponses = await Promise.all(workoutPromises);
        const workoutsData = logsData
          .map((response) => {
            return response;
          })
          .filter((workout) => workout !== null);
        setWorkouts(workoutsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching workouts:", error);
        setIsError(true);
        setIsLoading(false);
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


  return (
    <div className="flex  justify-center items-center ">
      <button
          onClick={prevSlide}
          className="bg-[#A79BF2]  text-[#262626] px-4 py-2 mr-2 rounded"
        >
          &lt;
        </button>
      <div className=" text-[#262626] carousel w-[15rem] carousel-end rounded-box">
        {workouts.map((workout, index) => {
          return (
            <>
              <div className=" bg-[#E2BDF2] rounded-full  ml-2 p-5 carousel-item w-4 h-4">
                <button
                  onClick={() => handlebtn(workout)}
                  className=" w-2"
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
