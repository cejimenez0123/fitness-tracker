
import React, { useState } from "react";
import Workout from "./Workout";
import { postApi } from "./fetch";
import { useQueryClient,useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import "./Displaytemplate.css";
const Displaytemplate = ({ bodypart, setPopup }) => {
  const queryClient = useQueryClient();
  const [workout, setWorkout] = useState({
    name: "",

  });
  const [exerciseData , setExerciseData]= useState([{
    id:uuidv4,
    exerciseName:"",
    muscle:"",
    type:"",
    sets:0,
    reps:[],
  }])

  const mutation = useMutation({
    mutationFn:(workoutData)=>postApi ("workout",workoutData),
    onSuccess: () => {
      // Invalidate the 'workout' query after mutation succeeds
      queryClient.invalidateQueries("workout");

    },
  });
  const exerciseMutation = useMutation({
    mutationFn:(exerciseData)=>postApi ("exercise",exerciseData),
    onSuccess: () => {
      // Invalidate the 'workout' query after mutation succeeds
      queryClient.invalidateQueries("workout");
    },
  });
  const setsMutation = useMutation({
    mutationFn:(setData)=>postApi ("set",setData),
    onSuccess: () => {
      // Invalidate the 'workout' query after mutation succeeds
      queryClient.invalidateQueries("workout");
    },
  });
console.log(workout);

console.log(exerciseData)

  const handleSubmit = async () => {
    console.log(workout);
    await mutation.mutateAsync({name:workout});
    await Promise.all(
    exerciseData.map(async (data) => {
    
      console.log(data.exerciseName.label.toUpperCase())
      await exerciseMutation.mutateAsync({
        name: data.exerciseName.label.toUpperCase(),
        type: data.type.label.toUpperCase(),
        muscle: data.muscle.label
      });
      await setsMutation.mutateAsync({
        activityId: data.id,
        reps: data.map((data))
      })
    })
  )
  };

  const handleClose = () => {
    console.log("close");
    setPopup("");
  };


  return (
    <div className="w-[30vw] absolute text-xl top-[30vh] left-[10vw]  p-5 rounded-2xl bg-lime-700">
   
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
        <dialog
          id="my_modal_3"
          className="modal
        +
        "
        >
          {/* <div className="w-full border-4 h-full sm:w-3/4 lg:w-1/2"> */}

          <Workout
            workout={workout}
            setWorkout={setWorkout}
            setExerciseData={setExerciseData}
            exerciseData={exerciseData}
            handleSubmit={handleSubmit}
          />
          {/* </div> */}
        </dialog>
        <button> History</button>
     
    </div>
  );
};

export default Displaytemplate;
