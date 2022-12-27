import { Author } from "../identities/Author";
import { Book } from "../identities/Book";
import prisma from "../Utils/script";

export class AuthorService {
  async createAuthor(books: Book, authors: Author): Promise<Book[]> {
    const author = new Author(authors.nome);
    const book = new Book(books.title, [author]);
    const authorCreated = await prisma.book.create({
      data: {
        id: book.id,
        titulo: book.title,
        author: {
          create: {
            id: author.id,
            nome: book.author[0].nome,
          },
        },
      },
    });
    return authorCreated;
  }
}
