import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';

import { homepagePage, contactPage } from './modules/template_engine/readPages.js';

//For env File 
dotenv.config();



const app: Application = express();

app.use(express.static("public"));
app.use(express.static("dist"));

const port = (process.env.PORT || 8080);


app.get('/', (req: Request, res: Response) => {
  res.send(homepagePage);
});

app.get("/contact", (req: Request, res: Response) => {
  res.send(contactPage);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});