import { ICreateBookDTO } from "../../DTOS/CreateBookDTO";
import { Book } from "../../identities/Book";
import IBookRepository from "../../repositories/IBookRepository";
export default class CreateBookUseCase {
  constructor(private readonly bookRepository: IBookRepository) {}

  async create(createBookDTO: ICreateBookDTO): Promise<Book> {
    const create = await this.bookRepository.create(createBookDTO);
    return create;
  }
}
