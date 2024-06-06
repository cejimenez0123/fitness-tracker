import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

import { useApi, postApi } from "./fetch";
import { useQueryClient } from "@tanstack/react-query";
import Execersize from "./Execersize";

const Workout = ({
  setExerciseData,
  workout,
  exerciseData,
  
  makeExercise,
  setWorkout,
  handleSubmit,
}) => {
  const[err,setErr]=useState("name cant be empty")
  const queryClient = useQueryClient();
  const { isLoading, data, isError, isFetching } = useApi("workout");

  if (isLoading) {
    return <div>Loading... </div>;
  }
  if (isError) {
    return <div>an error has occured {isError}</div>;
  }
  const workoutOptions = data.workouts.map((data) => ({
    value: data.name,
    label: data.name,
   
  }));
 
const handleChange=(selectedOption)=>{
  console.log(selectedOption.label);
  workout!== ""? setErr(""): setErr(" name cant be empty")
setWorkout(selectedOption.label)
}
  const Next = () => {


    err===""? document.getElementById("my_modal_4").showModal():""
   
  };
  
  return (
    <div>
      <div className="modal-box w-[30vw] h-[20vh]">
        <form method="dialog ">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle mt-3 mr-4 btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="mt-14">
            <label htmlFor="">Workout name</label>
            <CreatableSelect
              onChange={(selectedOption)=>handleChange(selectedOption)}
              name="WorkoutName"
              options={workoutOptions}
              className="text-black"
            />
            {err}
          </div>
        </form>

        <button className="btn mt-2 p" onClick={() => Next()}>
          Create Workout
        </button>
        <dialog id="my_modal_4" className="modal">
          <Execersize
          makeExercise={makeExercise}
            handleSubmit={handleSubmit}
            exerciseData={exerciseData}
            setExerciseData={setExerciseData}
            workout={workout}
          />
        </dialog>
      </div>
    </div>
  );
};

export default Workout;
