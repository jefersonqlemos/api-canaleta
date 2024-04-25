import express, { Express, Request, Response } from "express";
import { routes } from './routes';
import dotenv from 'dotenv'; 
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/', routes);
app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("healthcheck");
});

/*app.post("/user/generate-token", (req: Request, res: Response) => {

  const jwtSecretKey = process.env.JWT_SECRET_KEY ?? "";
  let data = {
      email: req.body.email,
      password: req.body.password,
  }

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});*/

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});