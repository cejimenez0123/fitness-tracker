import React from "react";

const SelectedModal = ({ selected, setSelected }) => {
  console.log(selected.activities);
  return (
    <div className=" w-40 text-white h-[1vh] flex flex-col justify-center items-center">
      <dialog
        open
        className="modal "
      >
        <div className="modal-box">
          <h3 className="font-bold text-2xl">{selected.workout.name}</h3>
        {selected.activities.map((data) => {
            console.log(data); 
            return(
            <div className="flex  flex-col gap-4">
              <h2 className="text-xl">Exercise name :{data.exercise.name}</h2>
              <p>Muscle:{data.exercise.muscle}</p>
              <p>Type:{data.id}</p>
            </div>

            )
            
            })}
        <button onClick={() => setSelected(null)}>close</button>
        </div>
      </dialog>
    </div>
  );
};

export default SelectedModal;
