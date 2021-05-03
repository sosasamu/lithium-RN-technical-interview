import { Book } from '@interfaces/book'
import { ActionCreator } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { ExtraArguments, ThunkResult } from '@redux/types'
import { BooksStoreActions, BooksStoreLoading, BooksStoreState, SetBooks } from './types'
import { actionTypes } from './actionTypes'

export const booksStoreLoading: ActionCreator<BooksStoreLoading> = (
  loading: boolean,
) => ({
  payload: {
    loading,
  },
  type: actionTypes.BOOKS_STORE_LOADING,
})

export const getBooks: ActionCreator<
  ThunkResult<BooksStoreState, ExtraArguments, BooksStoreActions>
> = () => {
  return async (
    dispatch: ThunkDispatch<BooksStoreState, ExtraArguments, BooksStoreActions>,
    _,
    { bookService },
  ) => {
    dispatch(booksStoreLoading(true))
    try {
      const books: Book[] = (await bookService.getBooks()).data
      if (books) {
        dispatch(setBooks(books))
      } else {
        throw new Error('Error getting books')
      }
      dispatch(booksStoreLoading(false))
    } catch (error) {
      dispatch(booksStoreLoading(false))
      console.log(error)
    }
  }
}

export const setBooks: ActionCreator<SetBooks> = (
  books: Book[],
) => {
  return {
    payload: {
      book: books,
    },
    type: actionTypes.SET_BOOKS,
  }
}