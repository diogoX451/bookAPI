import { IAuthor } from "./IAuthor";
export interface IBook {
  id?: string;
  titulo: string;
  nome: IAuthor;
}
