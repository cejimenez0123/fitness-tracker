const request = require("supertest");
const app= require("../index.js");
const { activity } = require("../db/index.js");

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
describe("Create/Delete activity with valid data", () => {
    test("POST /activity",async () => {
        // const validData = {
        //     logId:"664e004d2d0f67c57abce64e",
        //     exerciseId:"664b8555701ab1f0b1f25bf6"
        // }
        // const response = await request(app)
        //         .post("/activity")
        //         .set("Authorization",'Bearer ' + token)
        //         .send(validData)
        //         .expect(201)
        //         expect(response).toHaveProperty("body")
        //         expect(response.body).toHaveProperty("activity")
        //         const activity = response.body.activity
        //         expect(activity).toHaveProperty("id")
        //         expect(activity).toHaveProperty("exerciseId")
        //         expect(activity).toHaveProperty("logId")
        // const deleteRes = await request(app)
        //         .delete(`/activity/${activity.id}`)
        //         .set('Authorization', `Bearer ${token}`)
        //         .expect(200)
        //     expect(deleteRes.body).toHaveProperty("message")
        //     expect(deleteRes.body.message).toBe("Deleted Successfully")
    })
})