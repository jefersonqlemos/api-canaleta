import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/user/generateToken", (req, res) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  console.log(jwtSecretKey)
  let data = {
      email: 'res',
      password: '12',
  }

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});