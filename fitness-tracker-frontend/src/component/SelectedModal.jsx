import React from "react";

const SelectedModal = ({ selected, setSelected }) => {
  console.log(selected.activities);
  return (
    <div className=" text-white flex flex-col justify-center items-center">



      <dialog
        open
        className="modal "
      >
        <div className="modal-box  bg-[#0d334d] w-screen h-screen absolute bottom-0 ">
          <h3 className="font-bold mb-4 text-[#67ff67] text-2xl">{selected.workout.name}</h3>

        {selected.activities.map((data) => {
            console.log(data); 
            return(
            <div className=" card text-[#2c2c2c] flex mt-2 bg-[#e6e6fa] flex-col gap-5 p-5  ">
              <h2 className="text-xl">Exercise name: {data.exercise.name}</h2>
              <p>Muscle: {data.exercise.muscle}</p>
              <p>Type: {data.exercise.type}</p>
            </div>

            )
            
            })}
        <button className="btn mt-10 flex flex-row justify-end " onClick={() => setSelected(null)}>Close</button>
        </div>
      </dialog>
    </div>
  );
};

export default SelectedModal;
