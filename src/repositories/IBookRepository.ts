import { ICreateBookDTO } from "../DTOS/CreateBookDTO";
import { Book } from "../identities/Book";
export default interface IBookRepository {
  create: (createBookDTO: ICreateBookDTO) => Promise<Book>;
  getAuthor: (author: string, id: string) => Promise<Book>;
}
