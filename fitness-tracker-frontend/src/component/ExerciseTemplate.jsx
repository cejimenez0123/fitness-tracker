import React from "react";
import Select from "react-select";
import { useState } from "react";
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

// const handleChange = (selectedOption,e, i) => {
//     console.log("p", e.target);
//     console.log("p", selectedOption);
//     console.log("p", selectedOption.name);
//     let  name, value  ;
//     if (selectedOption ) {
//         name = selectedOption.name;
//         value = selectedOption.label;
//       }
//       // Handling regular input elements
//       else {
//         name = e.target.name;
//         value = e.target.value;
//       }
   
//     let onchangeVal = [...exerciseData];
//     onchangeVal[i][name] = value;
//     setExerciseData(onchangeVal);
//     console.log(exerciseData);
//   };
const handleChange = (selectedOption, index, field) => {
    const newData = [...exerciseData];
    newData[index][field] = selectedOption;
    setExerciseData(
        
        newData);
    console.log(exerciseData);

  };
  const handleDelete=(dataId)=>{
    event.preventDefault()
    const updatedExercises = exerciseData.filter((exercise) => exercise.id !== dataId);
       console.log(updatedExercises);
       
       setExerciseData(updatedExercises)
  }
return (
    <>
       {exerciseData.map((data, i) => (
        <div key={i} className="border-4 p-4 mt-10  rounded-lg ">
            {exerciseData.length >1&&
            
            <button onClick={()=>handleDelete(data.id)} className=" relative w-[12%] left-[19vw] btn-outline btn-error btn rounded-full text-white">-</button>
            
        }
            <div>
            </div>
          
          <label htmlFor=""> Exercise</label>
          <CreatableSelect
            name="exerciseName"
            value={data.exerciseName}
            onChange={(selectedOption) =>
              handleChange(selectedOption, i, "exerciseName")
            }
            options={exerciseOptions}
            isClearable
          />
          <label htmlFor="">Muscles</label>
          <Select
            
            name="muscle"
            value={data.muscle}
            onChange={(selectedOption) =>
              handleChange(selectedOption, i, "muscle")
            }
            options={muscleOptions}
            isClearable
          />
          <div className="flex w-full ">
            <span>
              <label htmlFor=""> Type of exercise</label>
              <Select
                name="type"
                value={data.type}
                onChange={(selectedOption) =>
                  handleChange(selectedOption, i, "type")
                }
                options={typeOptions}
                isClearable
              />
            </span>
            <span className=" ml-2">
              <label htmlFor=""> set</label>
              <br />
              <input
                className="w-[10vw]"
                name="sets"
                value={data.sets}
                onChange={(e) =>
                  handleChange(e.target.value , i, "sets")
                }
                type="number"
              />
            </span>
          </div>
          {data.sets > 0 && (
            <div className="flex">
              {[...Array(Number(data.sets))].map((_, index) => (
                <div key={index}>
                  <label htmlFor={`rep-${index+1}`}>Rep {index+1}</label>
                  <br />
                  <input
                    id={`rep-${index+1}`}
                    value={data.reps[index] || ""}
                    onChange={(e) =>
                      handleChange(
                        e.target.value,
                        i,
                        "reps",
                        index
                      )
                    }
                    name={`rep-${index + 1}`}
                    className="w-10"
                    type="number"
                  />

                </div>
              ))}
            </div>
          )}
                
        </div>
      ))}
    </>
  );
};

export default ExerciseTemplate;
