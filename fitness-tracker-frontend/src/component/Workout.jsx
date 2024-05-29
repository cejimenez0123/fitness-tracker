import React from 'react'
import Select from 'react-select';
import Execersize from './Execersize';
const Workout = ({setExercise , setWorkout, handleSubmit}) => {

  const Next=()=>{

    document.getElementById("my_modal_4").onclose()
    document.getElementById("my_modal_4").showModal()

  }
  return (
    <div>
       <div  className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              {/* <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={colourOptions}
      /> */}

            <input id='workout' type="text" />

            <label htmlFor="muscles"> Muscles</label>
            {/* <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  /> */}
            
            </form>
            
            <button
          className="btn"
          
          onClick={()=>Next() }
        >
          Next 
        </button>
        <dialog id="my_modal_4" className="modal">
        <Execersize handleSubmit={handleSubmit} setExercise={setExercise}/>
        </dialog>
          </div>
        
    </div>
  )
}

export default Workout
