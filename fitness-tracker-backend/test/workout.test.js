

const request = require("supertest");
const app= require("../index.js");
const exercise = require("../routes/exercise.js");
    
  

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
describe("Create Workout", () => {
    test("POST /workout/ with valid data", async () => {
        const validData = {
            name: "Chest and Tryceps",
            userId:"6648a6a2b11f3f3dd7112b50"
        }

        const response = await request(app)
        .post("/workout/")
        .set("Authorization",'Bearer ' + token)
        .send(validData)
        .expect("Content-Type", /json/)
        .expect(200); 
        expect(response.body).toHaveProperty("workout")  
        const deleteResponse = await request(app)
          .delete(`/workout/${response.body.workout.id}`)
          .set('Authorization', `Bearer ${token}`)
          .expect(200)
          expect(deleteResponse.body).toHaveProperty("message");
          expect(deleteResponse.body.message).toBe("Deleted Successfully");
   
    })
  })
  describe("Get All relavent workouts",()=>{
    test("GET /workout/",async ()=>{
      let response = await request(app)
                .get(`/workout/`)
                .set("Authorization",'Bearer ' + token)
                .expect(200)
                expect(response).toHaveProperty("body")
                expect(response.body).toHaveProperty("workouts")
                expect(response.body.workouts).toBeInstanceOf(Array)
    })
  })
  describe("Get Workout exercise", () => {
    test("GET /workout/:id/exercise", async() => {
        let workoutId = "6648ab6adad2bd469c5a2e3f"
        let response = await request(app)
                .get(`/workout/${workoutId}/exercise`)
                .set("Authorization",'Bearer ' + token)
                .expect(200)
                expect(response).toHaveProperty("body")
                expect(response.body).toHaveProperty("workout")  
                const workout = response.body.workout
                expect(workout).toHaveProperty("id")
                expect(workout).toHaveProperty("name")
                expect(workout).toHaveProperty("workoutExercises")
                expect(workout.workoutExercises).toBeInstanceOf(Array)
               
    })
})
describe("Add Exercise to Workout",()=>{
    test("POST /:workoutId/exercise/:exerciseId with valid data",async ()=>{

            const validData = {
                workoutId: "6648ab6adad2bd469c5a2e3f",
                exerciseId:"664bb28705185ef3f31a65f4"
            }
            let response = await request(app)
            .post(`/workout/${validData.workoutId}/exercise/${validData.exerciseId}`)
            .set("Authorization",'Bearer ' + token)
            .send(validData)
            .expect("Content-Type", /json/)
            .expect(200); 
            expect(response).toHaveProperty("body")
            expect(response.body).toHaveProperty("workout")
            expect(response.body.workout).toHaveProperty("workoutId")
            expect(response.body.workout).toHaveProperty("exerciseId")
            expect(response.body.workout).toHaveProperty("id")
            const deleteResponse = await request(app)
                .delete(`/workout/exercise/${response.body.workout.id}`)
                .set('Authorization', `Bearer ${token}`)
                .expect(200)
                expect(deleteResponse.body).toHaveProperty("message");
                expect(deleteResponse.body.message).toBe("Deleted Successfully");
             

    })
})