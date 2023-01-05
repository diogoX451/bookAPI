import { ICreateBookDTO } from "../DTOS/CreateBookDTO";
import { Book } from "../identities/Book";
import IBookRepository from "../repositories/IBookRepository";

export class BookService {
  private readonly bookRepository: IBookRepository;
  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  public async create(createBookDTO: ICreateBookDTO): Promise<Book> {
    const create = await this.bookRepository.create(createBookDTO);
    return create;
  }

  public async getAuthor(author: string, id: string): Promise<Book> {
    const book = await this.bookRepository.getAuthor(author, id);
    return book;
  }
}
