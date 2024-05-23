
const request = require("supertest");
const app= require("../index.js");
//skullcrusher 664dfa51132c52c30aaae32f
beforeEach(async () => {
    const userData = {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    };
  
    const loginResponse = await request(app)
      .post("/user/login")
      .expect("Content-Type", /json/)
      .send(userData)
      .expect(200);
  
    token = loginResponse.body.token;
  });
describe("Create/Delete exercise with valid data", () => {
   
    test("POST Exercise /", async () => {
    
        const validData = {
            name:"tricep extension",
            type:"dumbbell"
        }
     let response = await request(app)
        .post("/exercise/")
        .set('Authorization', `Bearer ${token}`)
        .send(validData)
        .expect(201)
        expect(response.body).toHaveProperty("exercise")
        expect(response.body.exercise).toHaveProperty("id")
        const exercise = response.body.exercise
       const deleteRes = await request(app)
            .delete(`/exercise/${exercise.id}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
        expect(deleteRes.body).toHaveProperty("message")
        expect(deleteRes.body.message).toBe("Deleted Successfully")
    })
  
        
  });
describe("Get Exercise", () => {
    test("GET Exercise /unprotected", async () => {
     let response = await request(app)
        .get("/exercise/unprotected")
        .expect(200)
        expect(response.body).toHaveProperty("exercises")
        expect(response.body.exercises).toBeInstanceOf(Array)
    })
    test("GET Exercise /protected", async () => {
      let response = await request(app)
         .get("/exercise/protected")
         .set('Authorization', `Bearer ${token}`)
         .expect(200)
         expect(response.body).toHaveProperty("exercises")
         expect(response.body.exercises).toBeInstanceOf(Array)
     })

  });

  
  
  
  
  