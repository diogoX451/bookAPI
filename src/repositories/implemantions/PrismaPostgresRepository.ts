import { Book } from "../../identities/Book";
import prisma from "../../Utils/script";
import IBookRepository from "../IBookRepository";
export class PrismaPostgresRepository implements IBookRepository {
  public async create(book: Book): Promise<void> {
    const postBook = await prisma.book.create({
      data: {
        titulo: book.titulo,
        author: {
          create: {
            nome: book.nome,
          },
        },
      },
    });
    return postBook;
  }

  // criar um livro com um author existente
  public async getAuthor(titulo: string, id: string): Promise<void> {
    const author = await prisma.book.findUnique({
      where: {
        titulo,
        id,
      },
    });
    return author;
  }
}
