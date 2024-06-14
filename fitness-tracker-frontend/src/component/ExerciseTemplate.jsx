import React from "react";
import Select from "react-select";
import { useState } from "react";
import setTemplate from "./setTemplate";
import CreatableSelect from "react-select/creatable";
const ExerciseTemplate = ({
  exerciseData,
  exerciseOptions,
  setExerciseData,
  muscleOptions,
  typeOptions,
}) => {
  const [isSearchable, setIsSearchable] = useState(true);
  const [isRtl, setIsRtl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


const handleChange = (selectedOption, index, field) => {
    const newData = [...exerciseData];
console.log(newData);
    

       newData[index][field] = selectedOption;
     
    setExerciseData(
        
        newData);
    console.log(exerciseData);

  };
  const handleDelete=(e,dataId,i)=>{
    console.log();
    e.preventDefault();
    const updatedExercises = exerciseData.filter((exercise) => exercise.id !== dataId);
       console.log(updatedExercises);
       
       setExerciseData(updatedExercises)
  }
return (
    <>
       {exerciseData.map((data, i) => (
        <div key={i} className=" p-4 mt-10  ">
         
            {exerciseData.length >1&&
            
            <button onClick={(e)=>handleDelete(e,data.id ,i)} className=" relative w-[12%] left-[19vw] btn-outline btn-error btn rounded-full text-white">-</button>
            
        }
            <div>
            </div>
          
          <label className="text-charcoal " htmlFor=""> Exercise</label>
          <CreatableSelect
            name="exerciseName"
            value={data.exerciseName}
            onChange={(selectedOption) =>
              handleChange(selectedOption, i, "exerciseName")
            }
            options={exerciseOptions}
         
          />
          <label  className="text-charcoal " htmlFor="">Muscles</label>
          <Select
            
            name="muscle"
            value={data.muscle}
            onChange={(selectedOption) =>
              handleChange(selectedOption, i, "muscle")
            }
            options={muscleOptions}
           
          />
          <div className="text-charcoal ">
            <span>
              <label htmlFor=""> Type of exercise</label>
              <Select
                name="type"
                value={data.type}
                onChange={(selectedOption) =>
                  handleChange(selectedOption, i, "type")
                }
                options={typeOptions}
                
              />
            </span>
            
          </div>
          
                
        </div>
      ))}
    </>
  );
};

export default ExerciseTemplate;
