import React from "react";

const Displaytemplate = ({ bodypart, setPopup }) => {
  const handleClose = () => {
    console.log("close");
    setPopup("");
  };
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
          
          onClick={() =>   document.getElementById("my_modal_3").showModal() }
        >
          open modal
        </button>
        <dialog id="my_modal_3" className="modal">
          <div  className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <label htmlFor=""> Execersize</label>

            <input type="text" />
            <label htmlFor=""> workout </label>
            
            <input type="text" value={"legs"} />
            <label htmlFor=""> Reps </label>
            
            <input type="text"  />
            <label htmlFor=""> Activities </label>
            
            <input type="text"  />
          </div>
        </dialog>
        <button> History</button>
      </span>
    </div>
  );
};

export default Displaytemplate;
