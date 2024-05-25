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

describe("Create/Delete Set", () => {
    test("POST /set with valid data", async () => {
      //   const validData = 
      //   {activityId:"664e00e02d0f67c57abce66e",
      //   reps:10,
      //   }
      //  let res = await request(app)
      //       .post("/set")
      //       .set('Authorization', `Bearer ${token}`)
      //       .send(validData)
      //       .expect(201);
      //       expect(res).toHaveProperty("body")
      //       expect(res.body).toHaveProperty("set")
      //       const deleteRes = await request(app)
      //       .delete(`/set/${res.body.set.id}`)
      //       .set('Authorization', `Bearer ${token}`)
      //       .expect(200)
      //           expect(deleteRes.body).toHaveProperty("message")
      //           expect(deleteRes.body.message).toBe("Deleted Successfully")
    }); 
  })