import React from 'react'
import Select from 'react-select';
import { workout } from './fetch';
import { useEffect } from 'react';
const Execersize = ({setExercise,handleSubmit}) => {
useEffect(()=>{
  workout()
})
  return (
    <div>
      
          <div  className="modal-box">
            <form onSubmit={handleSubmit} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            <label htmlFor=""> Execersize</label>

            <input type="text" />
            <label htmlFor=""> set</label>
            
            <input type="text" value={"legs"} />
            <label htmlFor=""> Reps </label>
            <input type="text" value={"legs"} />
            <button>Add</button>
             <button > Submit </button>
            </form>
          </div>
       
    </div>
  )
}

export default Execersize
