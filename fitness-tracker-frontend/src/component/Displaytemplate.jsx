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
  // const [activityId, setActivityid] = useState([]);
  const [exerciseId, setExerciseId] = useState([]);

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
        const logResponse = await postApi("log", {
          workoutId: data.workout.id,
        });
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
  const activityId =[]
  const exerciseMutation = useMutation({
    mutationFn: (exerciseData) => postApi("exercise", exerciseData),
    onSuccess: async (data) => {
      const exerciseids=[]
      console.log(data); 
      // Iterate through each exercise object in the data array
      await Promise.all(data.exercise.map(async (exercise) => {
        console.log(exercise);
        exerciseids.push(exercise.id);
        }));
        console.log(exerciseId);
        const activityResponse = await postApi("activity", {
          exerciseIds:exerciseids,
          logId: logid,
          });
          console.log(activityResponse);
          activityResponse.activities.map((data)=>
          activityId.push(data.id)
          )
          console.log(activityId);
          // setActivityid(activityResponse.activity.id);
          
      // After creating activities for all exercises, invalidate the 'exercise' query
      queryClient.invalidateQueries("exercise");
    },
  });
  console.log(activityId);

  const setsMutation = useMutation({
    mutationFn: (setData) => postApi("set", setData),
    onSuccess: () => {
    
      
    },
  });

  console.log( activityId.map(data=>data));
  const handleSubmit = async () => {
    await Promise.all(
      exerciseData.map(async (exercise) => {
        await Promise.all(
          exercise.sets.map(async (set) => {
            await Promise.all(
              activityId.map(async (id) => {
                await setsMutation.mutateAsync({
                  activityId: id,
                  reps: Number(set.reps),
                  weight: Number(set.weight),
                });
              })
            );
          })
        );
      })
    );
  };
  const handleClose = () => {
    setPopup("");
  };
  const makeExercise = async () => {
    document.getElementById("my_modal_5").showModal();
  
    const exercises = []; 
    await mutation.mutateAsync({ name: workout });
  
    await Promise.all(
      exerciseData.map(async (data) => {
        const exercise = {
          name: data.exerciseName.label.toUpperCase(),
          type: data.type.label.toUpperCase(),
          muscle: data.muscle.label,
        };
        exercises.push(exercise);
        console.log(exercise); 
      })
    );
  
    // After processing all exercises, perform the mutation with the array
    await exerciseMutation.mutateAsync({ exercise: exercises });
  };

  return (
    <div className="md:w-[50vw] md:h-[20vh] text-[#262626] absolute text-xl md:top-[30vh] md:left-[6vw]  p-5 rounded-2xl bg-[#32d4dc] // w-[90vw] bottom-[0vh] left-[5vw] ">
      <div className="flex justify-end">
        <button className="md:text-[2rem] // text-2xl justify-self-end " onClick={handleClose}>
          x
        </button>
      </div>
      <h1 className="">{motivation}</h1>
      <button
        className="btn mt-2 mr-5"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Make Plan
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
          makeExercise={makeExercise}
        />
        {/* </div> */}
      </dialog>
      <Link to="/history" className="hover:underline bold text-xl">
        {" "}
        History
      </Link>
    </div>
  );
};

export default Displaytemplate;
