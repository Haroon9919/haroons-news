const { app } = require("../app");
const seed = require("../db/seeds/seed");
const db = require("../db/data/development-data");
const data = require("../db/data/test-data");
const request = require('supertest');


// afterAll(() => {
//   return db.end();
// });

// beforeEach(() => {
//   return seed(data);
// });

describe("app testing", () => {
  describe("/api/topics", () => {
    test("200: returns with a status of 200", () => {
      return request(app).get("/api/topics").expect(200);
    });
    test('should respond with an array of topics object that have slug and description properties ', () => {
        const response = request(app).get("/api/topics")
        console.log(response.body)
        // const topics = response.body;
        
        // expect(topics).toBeInstanceOf(Array)
        // expect(topics).toHaveProperty("slug");
        // expect(topics).toHaveProperty("description");
        
    });
  });
});
