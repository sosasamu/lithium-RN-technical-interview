import { Book } from '@interfaces/book'
import { Action } from 'redux'
import { actionTypes } from './actionTypes'

export interface BooksStoreState {
  books?: Book[]
  loading: boolean
}

export interface BooksStoreLoading extends Action {
  type: actionTypes.BOOKS_STORE_LOADING
}

export interface SetBooks extends Action {
  payload: {
    book: Book[];
  }
  type: actionTypes.SET_BOOKS
}

export type BooksStoreActions =
  | SetBooks
  | BooksStoreLoading
