import React from 'react'

const Displaytemplate = ({bodypart, setPopup}) => {
    const handleClose=()=>{
        console.log("close")
        setPopup("")
    }
  return (
    
      <div className='w-[83vw] absolute text-xl top-[30vh] left-[10vw]  p-5 rounded-2xl bg-lime-700'>
        <span>
            <div className='flex justify-end'>

        <button className='text-2xl justify-self-end ' onClick={handleClose}>x</button>
            </div>
        <h1>life is too short to skip Leg day! What are your plans for your legs 
             </h1>
             <button>
                Add plans
             </button>
        </span>
      </div>
    
  )
}

export default Displaytemplate
