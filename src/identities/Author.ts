import { uuid } from "uuidv4";

import { Book } from "./Book";

// não obrigatorio o id pois o uuidv4 já gera um id

export class Author {
  public readonly id?: number;
  private readonly Book: Book[];

  constructor(public nome: string) {
    this.id = parseInt(uuid());
    this.nome = nome;
    this.Book = [];
  }
}
