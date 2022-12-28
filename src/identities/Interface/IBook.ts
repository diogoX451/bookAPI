import { IAuthor } from "./IAuthor";
export interface IBook {
  id?: number;
  title: string;
  author: IAuthor;
}
