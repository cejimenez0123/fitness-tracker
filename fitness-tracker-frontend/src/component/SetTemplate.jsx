import React from "react";
import { v4 as uuidv4 } from "uuid";

const SetTemplate = ({
  workout,
  exerciseData,

  setExerciseData,
  handleSubmit,
}) => {
  const handleChange = (e, exerciseIndex, setIndex, field) => {
    const updatedExerciseData = [...exerciseData];
    updatedExerciseData[exerciseIndex].sets[setIndex][field] = e.target.value;
    setExerciseData(updatedExerciseData);
    
  };
console.log(exerciseData);

  const addSet = (e, exerciseIndex) => {
    e.preventDefault();
    const updatedExerciseData = [...exerciseData];
    updatedExerciseData[exerciseIndex].sets.push({
      id: uuidv4(),
      reps: 0,
      weight: 0,
    });
    setExerciseData(updatedExerciseData);
  };

  const deleteSet = (exerciseIndex, setIndex) => {
    const updatedExerciseData = [...exerciseData];
    updatedExerciseData[exerciseIndex].sets.splice(setIndex, 1);
    setExerciseData(updatedExerciseData);
  };

  return (
    <div>
      <div className="modal-box w-11/12 max-w-5xl">
        <h4> {workout}</h4>
        <div className="modal-action">
          <form method="dialog">
            {exerciseData.map((exercise, exerciseIndex) => (
              <div key={exercise.id}>
                <p>{exercise.exerciseName.label}</p>
                <table>
                  <thead>
                    <tr>

                    <th>set</th>
                    <th>Reps</th>
                    <th>lbs</th>
                    </tr>
                  </thead>
                  {exercise.sets.map((set, setIndex) => (
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="number"
                            value={setIndex}
                            disabled
                            placeholder="Reps"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={set.reps}
                            onChange={(e) =>
                              handleChange(e, exerciseIndex, setIndex, "reps")
                            }
                            placeholder="Reps"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={set.weight}
                            onChange={(e) =>
                              handleChange(e, exerciseIndex, setIndex, "weight")
                            }
                            placeholder="Weight"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </td>
                      </tr>

                 
                        {exercise.sets.length > 1&&
                        
                      <button
                          className="btn"
                          onClick={() => deleteSet(exerciseIndex, setIndex)}
                        >
                          -
                        </button>
                      }
                
                    </tbody>
                  ))}
                </table>
                <button
                  className="btn"
                  onClick={(e) => addSet(e, exerciseIndex)}
                >
                  Add Set
                </button>
              </div>
            ))}
            <button className="btn ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetTemplate;
