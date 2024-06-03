import React from 'react'
import {useApi} from '../component/fetch';
const History = () => {
  const { isLoading, data, isError, isFetching } = useApi("log");

if(isLoading){
  return(

    <div>Loading... </div>
    
  )
}
if(isError){
  return(

    <div>an error has occured {isError}</div>
  )
}
  return (
    <>
    <h1>Past workouts </h1>
   
    <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">Workout Name</h2>
    <ul class="list-disc pl-4">  <li>
        <span class="font-bold">Exercise:</span> Squats
        <span class="ml-4">Sets:</span> 3
        <span class="ml-4">Reps:</span> 12
        <span class="ml-4">Weight:</span> 20 lbs
        <span class="ml-4">Muscle:</span> Legs
        <span class="ml-4">Type:</span> Compound
      </li>
      </ul>
    <div class="card-footer text-muted">  </div>
  </div>
</div>
    </>
  )
}

export default History
