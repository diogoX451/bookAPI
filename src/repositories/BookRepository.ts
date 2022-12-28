import { ICreateBookDTO } from "../DTOS/CreateBookDTO";
import { Book } from "../identities/Book";
import prisma from "../Utils/script";
import IBookRepository from "./IBookRepository";
export class BookRepository implements IBookRepository {
  public async create(createBookDTO: ICreateBookDTO): Promise<Book> {
    const create = await prisma.book.create({
      data: {
        id: 5,
        titulo: createBookDTO.title,
        author: {
          create: {
            id: 10,
            nome: createBookDTO.author,
          },
        },
      },
    });
    return create;
  }
}
