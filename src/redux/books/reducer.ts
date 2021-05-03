// import { BookState } from '@interfaces/book';
import { ReduxAction } from '@interfaces/redux';
import { actionTypes } from './actionTypes';
import { BooksStoreState } from './types';

const initialState: BooksStoreState = {
  loading: false,
  books: [],
}

const reducer = (state = initialState, action: ReduxAction) => {
  const { type } = action

  switch (type) {
    case actionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload.book,
      }
    case actionTypes.BOOKS_STORE_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      }
    default:
      return state
  }
};

export default reducer;
