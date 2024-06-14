
import React, { useState } from "react";
import Workout from "./Workout";
import { postApi } from "./fetch";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import "./Displaytemplate.css";
import { Link } from "react-router-dom";
const Displaytemplate = ({ motivation, setPopup }) => {
  const queryClient = useQueryClient();
  const [workout, setWorkout] = useState();
  const [logid, setLogid] = useState();
  const [activityId, setActivityid] = useState();
  
  const [exerciseData, setExerciseData] = useState([
    {
      id: uuidv4(),
      exerciseName: "",
      muscle: "",
      type: "",
      sets: [
        {
          id: uuidv4(),
          reps: 0,
          weight: 0,
        },
      ],
    },
  ]);

  const mutation = useMutation({
    mutationFn: (workoutData) => postApi("workout", workoutData),
    onSuccess: async (data) => {
      try {
        console.log(data.workout.id);
        const logResponse = await postApi("log", { workoutId: data.workout.id });
        console.log(logResponse);
        setLogid(logResponse.log.id); 
        console.log(logResponse.log.id);
      } catch (error) {
        console.error("Error creating log:", error);
      }
  
      // Invalidate the 'workout' query after mutation succeeds
      queryClient.invalidateQueries("workout");
    },
  });
  const exerciseMutation = useMutation({
    mutationFn: (exerciseData) => postApi("exercise", exerciseData),
    onSuccess:async (data) => {
      // Invalidate the 'workout' query after mutation succeeds
    console.log(data.exercise.id)
    const activityResponse = await postApi("activity", { logId: logid ,exerciseId:data.exercise.id});
      console.log(activityResponse.activity.id);
      setActivityid(activityResponse.activity.id)
      queryClient.invalidateQueries("exercise")
    }
  });
  console.log(activityId);

  const setsMutation = useMutation({
    mutationFn: (setData) => postApi("set", setData),
    onSuccess: () => {
      // Invalidate the 'workout' query after mutation succeeds
      
      queryClient.invalidateQueries("workout");
    },
  });
  

  const handleSubmit = async () => {
    await Promise.all(
      exerciseData.map(async (data) => {
        await setsMutation.mutateAsync({
          activityId: activityId,
          reps: data.sets.map(repsData=>repsData.reps),
          weight: data.sets.map(weightData=>weightData.weight),

        });
      })
    );
  };

  const handleClose = () => {
  
    setPopup("");
  };
  const makeExercise = async () => {
    document.getElementById("my_modal_5").showModal();
    await mutation.mutateAsync({ name: workout });
    await Promise.all(
      exerciseData.map(async (data) => {
        await exerciseMutation.mutateAsync({
          name: data.exerciseName.label.toUpperCase(),
          type: data.type.label.toUpperCase(),
          muscle: data.muscle.label,
        });
      })
    );
  };

  return (
    <div className="w-[30vw] bg-[#f4f3f2]    absolute text-xl top-[20em] h-1/3 left-[10vw]  p-5 rounded-2xl bg-persianRed ">
      <div className="flex justify-end">
        <button className="text-2xl justify-self-end " onClick={handleClose}>
          x
        </button>
      </div>
      <h1 className="text-white">{motivation}</h1>
      <div className="mt-8">
      <button
        className="btn mr-5 mt-4 bg-PrussianBlue"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Make Plan
      </button>
      
      <dialog
        id="my_modal_3"
        className="modal
        +
       mt-8
        "
      >
        {/* <div className="w-full border-4 h-full sm:w-3/4 lg:w-1/2"> */}

        <Workout
          workout={workout}
          setWorkout={setWorkout}
          setExerciseData={setExerciseData}
          exerciseData={exerciseData}
          handleSubmit={handleSubmit}
          makeExercise={makeExercise}
        />
        {/* </div> */}
      </dialog>
      <Link to="/history" className="hover:underline bold text-xl">
        {" "}
        History
      </Link>
    </div>
    </div>
  );
};

export default Displaytemplate;
