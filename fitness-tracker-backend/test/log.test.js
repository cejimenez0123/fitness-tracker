const request = require("supertest");
const app= require("../index.js");


// model Log{
//     id  String    @id @default(auto()) @map("_id") @db.ObjectId
//     workout Workout  @relation(fields: [workoutId], references: [id])
//     workoutId String  @db.ObjectId
//     date DateTime @default(now())
//     activities Activity[]
// }
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

describe("Create Log", () => {
    test("POST /log with valid data", async () => {
        const validData = 
        {workoutId: "6648ab6adad2bd469c5a2e3f",
        }
       let res = await request(app)
            .post("/log")
            .set('Authorization', `Bearer ${token}`)
            .expect("Content-Type", /json/)
            .send(validData)
            .expect(201);
            expect(res).toHaveProperty("body")
    }); 
  })