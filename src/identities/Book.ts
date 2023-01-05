import { uuid } from "uuidv4";

import { Author } from "./Author";
import { IBook } from "./Interface/IBook";

export class Book implements IBook {
  public id?: string;
  public titulo: string;
  public nome: Author;
  constructor(titulo: string, nome: Author, id: number) {
    this.id = uuid();
    this.titulo = titulo;
    this.nome = nome;
  }

  get title(): string {
    return this.titulo;
  }

  set title(value: string) {
    this.titulo = value;
  }

  get author(): Author {
    return this.nome;
  }

  set author(value: Author) {
    this.nome = value;
  }
}
