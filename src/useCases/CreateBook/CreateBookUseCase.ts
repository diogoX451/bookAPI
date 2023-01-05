import { ICreateBookDTO } from "../../DTOS/CreateBookDTO";
import { Book } from "../../identities/Book";
import IBookRepository from "../../repositories/IBookRepository";
export default class CreateBookUseCase {
  private readonly bookRepository: IBookRepository;
  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  public async createBook(createBookDTO: ICreateBookDTO): Promise<Book> {
    const book = new Book(createBookDTO);
    const create = await this.bookRepository.create(book);
    return create;
  }

  public async getAuthor(author: string, id: string): Promise<Book> {
    const book = await this.bookRepository.getAuthor(author, id);
    return book;
  }
}
