import { IBookService } from '@services/BookService'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export interface ExtraArguments {
  bookService: IBookService
}

export type ThunkResult<S, E, A extends Action> = ThunkAction<
  Promise<void>,
  S,
  E,
  A
>
