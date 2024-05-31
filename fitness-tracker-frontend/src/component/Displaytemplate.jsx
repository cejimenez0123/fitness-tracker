import React, { useState } from "react";
import Workout from "./Workout";
const Displaytemplate = ({ bodypart, setPopup }) => {
  const handleSubmit = () => {
    console.log("hi");
  };

  const handleClose = () => {
    console.log("close");
    setPopup("");
  };
  const [workout, setWorkout] = useState({
    WorkoutName: "",
    TargetMuscles: "",
  });
  const [Exercise, setExercise] = useState({
    ExerciseName: "",
    Set: "",
    Reps: "",
  });

  return (
    <div className="w-[30vw] absolute text-xl top-[30vh] left-[10vw]  p-5 rounded-2xl bg-lime-700">
      <span>
        <div className="flex justify-end">
          <button className="text-2xl justify-self-end " onClick={handleClose}>
            x
          </button>
        </div>
        <h1>
          life is too short to skip Leg day! What are your plans for your legs
        </h1>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_3" className="modal">
          <Workout
            setWorkout={setWorkout}
            setExercise={setExercise}
            handleSubmit={handleSubmit}
          />
        </dialog>
        <button> History</button>
      </span>
    </div>
  );
};

export default Displaytemplate;
