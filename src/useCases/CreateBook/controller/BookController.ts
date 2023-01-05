import { Request, Response } from "express";

import { PrismaPostgresRepository } from "../../../repositories/implemantions/PrismaPostgresRepository";
import { BookService } from "../../../services/BookService";
import CreateBookUseCase from "../CreateBookUseCase";
export class BookController {
  constructor(private readonly createBookUseCase: CreateBookUseCase) {}
  async create(req: Request, res: Response): Promise<Response> {
    const { id, titulo, nome } = req.body;
    const bookRepository = new PrismaPostgresRepository();
    const bookService = new BookService(bookRepository);
    const book = await bookService.getAuthor(titulo, id);
    res.status(201).json(book);
    return res;
  }
}
