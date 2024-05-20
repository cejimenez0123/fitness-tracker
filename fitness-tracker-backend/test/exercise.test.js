
const request = require("supertest");
const app= require("../index.js");

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
            name:"squats",
            type:"cardio"
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


  
  
  
  
  