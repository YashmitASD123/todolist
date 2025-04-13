import request from "supertest";
import app from "../src/app";

describe('Test app.ts', () => {
  test('GET /api/todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.body).toBe({message: "GET all todos"})
  })
})
