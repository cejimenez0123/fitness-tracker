
const request = require("supertest");
const {app,server}= require("../index.js");

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
            name:"lat pulldown",
            type:"MACHINE",
            muscle:"BACK"
        }


     let response = await request(app)
        .post("/exercise/admin")
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

  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    server.close(function() { console.log('Closed Server'); });
  });

  
  
  
  
  