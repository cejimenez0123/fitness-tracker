import React from 'react'

const setTemplate = () => {
  return (
    <div>
        {/* <span className=" ml-2">
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
            </span> */}
      {/* {data.sets > 0 && (
            <div className="flex">
              {[...Array(Number(data.sets))].map((_, index) => (
                <div key={index}>
                  <label htmlFor={`rep-${index+1}`}>Rep {index+1}</label>
                  <br />
                  <input
                    id={`rep-${index+1}`}
                    value={data.reps[index] }
                    onChange={(e) =>
                      handleChange(
                        e.target.value,
                        i,
                        "reps",
                      )
                    }
                    name={`rep-${index + 1}`}
                    className="w-10"
                    type="number"
                  />

                </div>
              ))}
            </div>
          )} */}
    </div>
  )
}

export default setTemplate
