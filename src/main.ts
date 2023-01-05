import Express, { Request, Response } from "express";

import { BookController } from "./useCases/CreateBook/controller/BookController";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
const userControle = new BookController();
app.post("/", userControle.create);

app.listen(port, () => {
  console.log(`Rodando 🚀🚀 http://localhost:${port}`);
});
