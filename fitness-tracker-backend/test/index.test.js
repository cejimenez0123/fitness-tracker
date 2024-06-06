
const request = require("supertest");
const app= require("../index.js");


describe("Register User", () => {
    test("POST /user/register with valid data", async () => {
    const userData = {
        email: "atest90@test.com",
        name: "joe test",
        gender:"male",
        password: "password"}
    const response = await request(app)
        .post("/user/register")
        .expect("Content-Type", /json/)
        .send(userData)
        .expect(201);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("User registered successfully");
      expect(response.body).toHaveProperty("token");
    const token = response.body.token;
    const deleteResponse = await request(app)
      .delete(`/user/`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    expect(deleteResponse.body).toHaveProperty("message");
    expect(deleteResponse.body.message).toBe("User deleted successfully");
  }); 
})
  describe("Log In", () => {
    test("POST /user/login with valid data", async () => {
      const validData = {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
      };
  
      const response = await request(app)
        .post("/user/login")
        .expect("Content-Type", /json/)
        .send(validData)
        .expect(200);
      expect(response.body).toHaveProperty("token");
    
    });
  });

  
  
  