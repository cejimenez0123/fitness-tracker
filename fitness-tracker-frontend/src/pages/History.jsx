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
    <div>
      hello this is going to be your history page 
      
    </div>
  )
}

export default History
