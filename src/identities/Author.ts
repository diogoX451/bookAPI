import { uuid } from "uuidv4";

import { IAuthor } from "./Interface/IAuthor";
export class Author implements IAuthor {
  public id?: string;
  constructor(public nome: string) {
    this.id = uuid();
    this.nome = nome;
  }

  get author(): string {
    return this.nome;
  }

  set author(value: string) {
    this.nome = value;
  }
}
