import { uuid } from "uuidv4";
export class Author {
  public readonly id: string;
  constructor(public author: string) {
    this.id = uuid();
    this.author = author;
  }

  get nome(): string {
    return this.author;
  }

  set nome(value: string) {
    this.author = value;
  }
}
