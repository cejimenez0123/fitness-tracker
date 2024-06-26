import React, { useState } from "react";
import Workout from "./Workout";
import { postApi } from "./fetch";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import "./Displaytemplate.css";
import { Link } from "react-router-dom";

const Displaytemplate = ({ motivation, setPopup }) => {
  const queryClient = useQueryClient();
  const [workout, setWorkout] = useState("");
  const [logid, setLogid] = useState("");
  const [exerciseId, setExerciseId] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

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
        const logResponse = await postApi("log", {
          workoutId: data.workout.id,
        });
        setLogid(logResponse.log.id);
      } catch (error) {
        console.error("Error creating log:", error);
      }

      queryClient.invalidateQueries("workout");
    },
  });

  const activityId = [];
  const exerciseMutation = useMutation({
    mutationFn: (exerciseData) => postApi("exercise", exerciseData),
    onSuccess: async (data) => {
      const exerciseids = [];
      await Promise.all(
        data.exercise.map(async (exercise) => {
          exerciseids.push(exercise.id);
        })
      );

      const activityResponse = await postApi("activity", {
        exerciseIds: exerciseids,
        logId: logid,
      });

      activityResponse.activities.map((data) => activityId.push(data.id));

      queryClient.invalidateQueries("exercise");
    },
  });

  const setsMutation = useMutation({
    mutationFn: (setData) => postApi("set", setData),
    onSuccess: () => {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  const makeExercise = async (e) => {
    e.preventDefault();

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
      })
    );

    await exerciseMutation.mutateAsync({ exercise: exercises });
  };

  return (
    <div className="md:w-[50vw] md:h-[20vh] text-[#262626] absolute text-xl md:top-[30vh] md:left-[6vw] p-5 rounded-2xl bg-[#32d4dc] w-[90vw] bottom-[0vh] left-[5vw]">
      <div className="flex justify-end">
        <button className="md:text-[2rem] text-2xl justify-self-end" onClick={handleClose}>
          x
        </button>
      </div>
      <h1 className="">{motivation}</h1>
      <button className="btn mt-2 mr-5" onClick={() => document.getElementById("my_modal_3").showModal()}>
        Make Plan
      </button>

      <dialog id="my_modal_3" className="modal mt-8">
        <form onSubmit={handleSubmit}>
          <Workout
            workout={workout}
            setWorkout={setWorkout}
            setExerciseData={setExerciseData}
            exerciseData={exerciseData}
            handleSubmit={handleSubmit}
            makeExercise={(e)=>makeExercise(e)}
          />
          <button type="submit" className="btn mt-2">Submit</button>
        </form>
      </dialog>
      {alertVisible && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>The set has been added</span>
        </div>
      )}
      <Link to="/history" className="hover:underline bold text-white text-xl">
        History
      </Link>
    </div>
  );
};

export default Displaytemplate;
