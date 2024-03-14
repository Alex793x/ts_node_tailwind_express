import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import fs from "fs"

const homepage = fs.readFileSync("./public/pages/homepage/homepage.html").toString();

//For env File 
dotenv.config();

const app: Application = express();

app.use(express.static("public"));
app.use(express.static("dist"));

const port = (process.env.PORT || 8080);


app.get('/', (req: Request, res: Response) => {
  res.send(homepage);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});