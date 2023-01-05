import { PrismaPostgresRepository } from "../../repositories/implemantions/PrismaPostgresRepository";
import { BookService } from "../../services/BookService";
import { BookController } from "./controller/BookController";
import CreateBookUseCase from "./CreateBookUseCase";

const prismaPostgresRepository = new PrismaPostgresRepository();
const bookService = new BookService(prismaPostgresRepository);
const createBookUseCase = new CreateBookUseCase(prismaPostgresRepository);
const bookController = new BookController(createBookUseCase);

export { bookService, bookController, createBookUseCase };
