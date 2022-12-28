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
}
