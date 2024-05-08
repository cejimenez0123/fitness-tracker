import { useState } from 'react'
import Homepage from './Homepage'
import Userlogin from './pages/Userlogin'
import './App.css'
import UserSignup from './pages/UserSignup'
import Enviroment from './core'
import axios from "axios"
import Displaytemplate from './component/Displaytemplate'
function App() {
  
  return (
    <>
    <div className=''>

            <h1 className="text-3xl text-center font-bold underline">
      Hello world!
    </h1>
    <Homepage/>
    {/* <UserSignup/> */}
    <Userlogin/>
      
     {/* <Displaytemplate/> */}
    </div>
    </>
  )
}

export default App
