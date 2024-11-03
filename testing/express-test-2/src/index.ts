import express, { Express, Request, Response } from "express";
export const app: Express = express();

app.use(express.json());

app.post("/sum", (req: Request, res: Response) => {
  const a = req.body.a;
  const b = req.body.b;

  res.json({
    answer: a + b,
  });
});
