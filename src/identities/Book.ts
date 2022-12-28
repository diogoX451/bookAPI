import { uuid } from "uuidv4";

import { IAuthor } from "./Interface/IAuthor";
import { IBook } from "./Interface/IBook";

export class Book implements IBook {
  public readonly id?: number;
  public title: string;
  public author: IAuthor;
  constructor(title: string, author: IAuthor) {
    this.id = parseInt(uuid());
    this.title = title;
    this.author = author;
  }

  get titulo(): string {
    return this.title;
  }

  set titulo(value: string) {
    this.title = value;
  }

  get nome(): IAuthor {
    return this.author;
  }

  set nome(value: IAuthor) {
    this.author = value;
  }
}
