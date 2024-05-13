
const request = require("supertest");

const app = require("../index.js");



describe("Hello World", () => {
    test("GET /", (done) => {
      request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
          res.body.message = "Hello World!";
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
    
  });
  

//   describe("Register User", () => {
//     test("POST /user/register with valid data", async () => {
//       const userData = {
//         email: "test1@test.com",
//         name: "joe test",
//         password: "password"
//       };
  
//       const response = await request(app)
//         .post("/user/register")
//         .send(userData)
//         .expect("Content-Type", /json/)
//         .expect(201); // Expect created (201) status code for registration
 //         expect(response.body).toHaveProperty("message");
//         expect(response.body.message).toBe("User registered successfully");
//         expect(response.body).toHaveProperty("token"); // Assert presence of user id
//       // Add more assertions based on your registration response structure
//     });
//   })  

  describe("Log In", () => {
    test("POST /user/login with valid data", async () => {
      const validData = {
        email: "test@test.com",
        password: "password"
      };
  
      const response = await request(app)
        .post("/user/login")
        .expect("Content-Type", /json/)
        .send(validData)
        .expect(200);
      expect(response.body).toHaveProperty("token");
    
    });
  });

  
  
  
  
  