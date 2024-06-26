

import workoutJpg from "../../public/workout.jpg"
import stretchJpg from "../../public/stretch.jpg"
import "../App.css"

const Landing = () => {
  
    return (
      <div className="bg-back w-screen pt-16 ml:pt-32 ">
        <div className="mx-auto w-fit">
            <h1 className="ml:text-6xl text-PrussianBlue mx-16 text-2xl mb-16 text-center "
            >Achieve Your Fitness Goals with Fitness Tracker!</h1>
        </div>
            <div className="w-full flex flex-col ml:flex-row ml:mx-32">
        <img src={workoutJpg} 
        className="h-[25rem] rounded-lg object-none object-scale-down"/>
            <div className="bg-PrussianBlue   ml:w-[30em]  p-8 text-white rounded-lg 
            ml:h-fit mx-auto ml:mr-32 ml:ml-16 my-16">
                <div  className="w-fit mx-auto mt-8 ml:ml-8">
               
       <h1 className="text-4xl mb-4"> Why Fitness Tacker?</h1>
                <ul className=" text-3xl ml-4">
                    <li className="mb-2">Track your workouts</li>
                    <li className="mb-2">Personalized Workouts</li>
                    <li className="mb-2">Be mindful, not stressed</li>
                </ul>
                </div>
            </div>
     
        </div>
        <div className=" flex-col flex ml:flex-row mx-8 ml:mx-32 ml:mt-16  ">

        <div className="bg-PrussianBlue  ml:w-1/2 text-white rounded-lg ml:h-[20em] ml:ml-32 ml:mr-16 ml:my-16">
        <div  className="ml:w-fit  text-2xl  m ml:ml-8"> 
        <div  className="w-128 h-128 p-8">
        <h1>"I've achieved my fitness goals faster with 
       Fitness Tracker. The personalized workout plans 
        and real-time tracking keep me motivated every day!"</h1>
       <div><h1> — Emilio, Satisfied User</h1></div>
        </div>
        </div>
        </div>
        <img  src={stretchJpg} className="h-[25rem]  rounded-lg object-none object-scale-down" />
     </div>


        
    
      </div>
    )
  }


  export default Landing