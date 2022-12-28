import { Request, Response } from "express";

import { BookRepository } from "../repositories/BookRepository";
import { BookService } from "../services/BookService";
export class BookController {
  async create(req: Request, res: Response): Promise<Response> {
    const { title, author } = req.body;
    const bookRepository = new BookRepository();
    const bookService = new BookService(bookRepository);
    const book = await bookService.create({ title, author });
    return res.json(book);
  }
}
