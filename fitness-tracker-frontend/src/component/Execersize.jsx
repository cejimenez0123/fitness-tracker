import React from "react";
import { useEffect, useState } from "react";
import { useApi } from "./fetch";
import ExerciseTemplate from "./ExerciseTemplate";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

import SetTemplate from "./SetTemplate";
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
    <div>
      <div className="modal-box w-[30vw] h-[40vh] ">
        <form onSubmit={handleSubmit} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <button onClick={add} className="btn relative left-[70%] top-4  ">
            Add exercise
          </button>

          <ExerciseTemplate
            exerciseData={exerciseData}
            exerciseOptions={exerciseOptions}
            muscleOptions={muscleOptions}
            typeOptions={typeOptions}
            setExerciseData={setExerciseData}
            //  handleChange={handleChange}
          />
        </form>
        <button onClick={makeExercise} className="btn">
          
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
