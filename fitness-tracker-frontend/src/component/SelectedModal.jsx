import React, { useState } from "react";
import axios from "axios";
import { useApi } from "./fetch";
import { putApi } from "./fetch";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteApi } from "./fetch";

const SelectedModal = ({ selected, setSelected }) => {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(selected.workout.name);

  console.log(selected.activities);

  const handleEdit = () => {
    setIsEditing(true);
  };


  const deleteLogMutation = useMutation({
    mutationFn: (logId) => deleteApi(`log/${logId}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries('log');
      setSelected(null);
    },
  });
// this is the begining of editing the workout name 
  const UpdateTitleMutation = useMutation({
    mutationFn: (workoutname) => putApi(`workout/${selected.workout.id}` , workoutname),
    onSuccess: (data) => {
      queryClient.invalidateQueries('log');
      setSelected(null);
    },
  });
  const handleTitleChange = (e) => {
    console.log(e.target.value);
    setNewTitle(e.target.value)
  };

  const handleSave = () => {
    console.log(newTitle);
    UpdateTitleMutation.mutate({ name: newTitle })

  
    
  };



  const deleteExerciseMutation = useMutation({
    mutationFn: (exerciseId) => deleteApi(`exercise/${exerciseId}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries('log');
      setSelected(null);
    },
  });

  const deleteWorkout = (logId) => {
    deleteLogMutation.mutate(logId);
  };

  const deleteExercises = (exerciseId) => {
    deleteExerciseMutation.mutateAsync(exerciseId);
  };

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <dialog open className="modal">
        <div className="modal-box bg-[#0d334d] w-screen h-screen absolute bottom-0">
          <button className="btn" onClick={() => deleteWorkout(selected.id)}>delete</button>
          <span className="flex">
            {isEditing ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={newTitle}
                  onChange={handleTitleChange}
                  className="input input-bordered"
                />
                <button className="btn ml-2" onClick={handleSave}>
                  Save
                </button>
              </div>
            ) : (
              <h3 className="font-bold mb-4 text-[#67ff67] text-2xl">{selected.workout.name}</h3>
            )}
            {!isEditing && (
              <button className="ml-2 flex" onClick={handleEdit}>
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="edit" width="24" height="24">
                  <path fill="white" d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path>
                  <path fill="white" d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path>
                </svg>
              </button>
            )}
          </span>
          {selected.activities.map((data) => {
            console.log(data);
            return (
              <div key={data.exerciseId} className="card text-[#2c2c2c] flex mt-2 bg-[#e6e6fa] flex-col gap-5 p-5">
                <h2 className="text-xl">Exercise name: {data.exercise.name}</h2>
                <p>Muscle: {data.exercise.muscle}</p>
                <p>Type: {data.exercise.type}</p>
                <button className="btn" onClick={() => deleteExercises(data.exerciseId)}>delete</button>
              </div>
            );
          })}
          <button className="btn mt-10 flex flex-row justify-end" onClick={() => setSelected(null)}>Close</button>
        </div>
      </dialog>
    </div>
  );
};

export default SelectedModal;
