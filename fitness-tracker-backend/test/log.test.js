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

describe("Create/Delete Log", () => {
    test("POST /log with valid data", async () => {
        const validData = 
        {workoutId: "6650ecf508a49792e80be0a8",
        }
       let res = await request(app)
            .post("/log")
            .set('Authorization', `Bearer ${token}`)
            .send(validData)
            .expect(201);
            expect(res).toHaveProperty("body")
            expect(res.body).toHaveProperty("log")
            const log = res.body.log
            expect(log).toHaveProperty("id")
            expect(log).toHaveProperty("workoutId")
            expect(log).toHaveProperty("date")

            const deleteRes = await request(app)
            .delete(`/log/${log.id}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
                expect(deleteRes.body).toHaveProperty("message")
                expect(deleteRes.body.message).toBe("Deleted Successfully")
    }); 
  })