import Express, { Request, Response } from "express";

import { AuthorService } from "./services/AuthorService";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.post("/", async (req: Request, res: Response): any => {
  const { title, nome } = req.body;
  const authorService = new AuthorService();
  const author = await authorService.createAuthor({ title }, { nome });
  res.status(200).json(author);
});

app.listen(port, () => {
  console.log(`Rodando 🚀🚀 http://localhost:${port}`);
});
