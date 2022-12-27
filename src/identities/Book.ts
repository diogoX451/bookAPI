import { uuid } from "uuidv4";

import { Author } from "./Author";

export class Book {
  public readonly id?: number;

  constructor(public title: string, public author: Author[] = []) {
    this.title = title;
    this.author = author;
    this.id = parseInt(uuid());
  }
}
