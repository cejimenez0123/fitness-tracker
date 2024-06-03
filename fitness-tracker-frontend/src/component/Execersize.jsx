import React from "react";
import { useEffect, useState } from "react";
import { useApi } from "./fetch";
import ExerciseTemplate from "./ExerciseTemplate";
import Select from "react-select";
const Execersize = ({ setExerciseData, exerciseData, handleSubmit }) => {
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
    name:"exerciseName"
  }));
  const muscleOptions = data.exercises.map((data) => ({
    value: data.muscle,
    label: data.muscle,
    name:"muscle"

  }));
  const typeOptions = data.exercises.map((data) => ({
    value: data.type,
    label: data.type,
    name:"type"

  }));
  const add=(e)=>{
    e.preventDefault()
    console.log("ready ");
    const data= [...exerciseData,
      {
        exerciseName:"",
        muscle:[],
        type:"",
        sets:2,
        reps:[],
      }
    ]
    setExerciseData(data)
  }


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

          <ExerciseTemplate exerciseData={exerciseData}
           exerciseOptions={exerciseOptions}
           muscleOptions={muscleOptions}
           typeOptions={typeOptions}
           setExerciseData={setExerciseData}
          //  handleChange={handleChange}
           />
          <button className="btn"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Execersize;
