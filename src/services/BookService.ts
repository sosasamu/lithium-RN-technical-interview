import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/book';

export interface IBookService {
  getBooks(): Promise<GetBookInterface>
}
export interface GetBookInterface {
  ok: boolean;
  data: Book[];
}

export class BookService implements IBookService {
  public async getBooks(): Promise<GetBookInterface> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ ok: true, data: BOOKS_MOCK })
      }, 1500)
    })
  }
}

export default new BookService()
