import React from "react";
import { useEffect, useState } from "react";
import { useApi } from "./fetch";
import ExerciseTemplate from "./ExerciseTemplate";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

import SetTemplate from "./setTemplate";
const Execersize = ({
  setExerciseData,
  workout,
  
  makeExercise,
  
  exerciseData,
  handleSubmit,
}) => {
  const [isSearchable, setIsSearchable] = useState(true);
  const { isLoading, data, isError, isFetching } = useApi(
    "exercise/unprotected"
  );
  if (isLoading) {
    return <div>Loading... </div>;
  }
  if (isError) {
    return <div>an error has occured {isError}</div>;
  }
  const exercise = data.exercises;
  const exerciseOptions = data.exercises.map((data) => ({
    value: data.name,
    label: data.name,
    name: "exerciseName",
  }));
  const muscleOptions = data.exercises.map((data) => ({
    value: data.muscle,
    label: data.muscle,
    name: "muscle",
  }));
  const typeOptions = data.exercises.map((data) => ({
    value: data.type,
    label: data.type,
    name: "type",
  }));
  const add = (e) => {
    e.preventDefault();
    console.log("ready ");
    const data = [
      ...exerciseData,
      {id: uuidv4(),
      exerciseName: "",
      muscle: "",
      type: "",
      sets: [
        {
          id: uuidv4(),
          reps: 0,
          weight: 0
        }
      ]}
    ];
    setExerciseData(data);
  };

  return (
    <div className=" px-4 py-4">
      <div className=" lg:w-[40rem] lg:h-[35rem] rounded-lg bg-[#f4f3f2] ">
        <form onSubmit={handleSubmit} method="dialog">
          <div className="flex flex-row justify-between">
          <button className="btn text-xl text-charcoal btn-sm btn-circle btn-ghost ">
            ✕
          </button>
          <button onClick={add} className="btn mr-8 text-white w-48 relative  top-4  ">
            Add exercise
          </button>
          </div>
        <div className="mx-4 my-8">
          <ExerciseTemplate
            exerciseData={exerciseData}
            exerciseOptions={exerciseOptions}
            muscleOptions={muscleOptions}
            typeOptions={typeOptions}
            setExerciseData={setExerciseData}
            //  handleChange={handleChange}
          />
          </div>
        </form>
        <button onClick={makeExercise} className="btn text-white bg-PrussianBlue ml-8">
          
          Create excersice
        </button>
        <dialog id="my_modal_5" className="modal">
          <SetTemplate
            workout={workout}
            
            handleSubmit={handleSubmit}
            exerciseData={exerciseData}
            setExerciseData={setExerciseData}
          />
        </dialog>
      </div>
    </div>
  );
};

export default Execersize;
