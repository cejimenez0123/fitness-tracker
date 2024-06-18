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
describe("Create/Delete activity with valid data", () => {
    test("POST /activity",async () => {
        const validData = {
            logId:"6657132c68a0a0370479882d",
            exerciseId:"6650ebbb08a49792e80be054"
        }
        const response = await request(app)
                .post("/activity")
                .set("Authorization",'Bearer ' + token)
                .send(validData)
                .expect(201)
                expect(response).toHaveProperty("body")
                expect(response.body).toHaveProperty("activity")
                const activity = response.body.activity
                expect(activity).toHaveProperty("id")
                expect(activity).toHaveProperty("exerciseId")
                expect(activity).toHaveProperty("logId")
        const deleteRes = await request(app)
                .delete(`/activity/${activity.id}`)
                .set('Authorization', `Bearer ${token}`)
                .expect(200)
            expect(deleteRes.body).toHaveProperty("message")
            expect(deleteRes.body.message).toBe("Deleted Successfully")
    })
})
afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  server.close(function() { console.log('Closed Server'); });
});
