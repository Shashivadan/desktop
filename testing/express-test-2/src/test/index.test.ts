import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("post sum", () => {
  it("should return some of 1 ,2 ", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });
});
