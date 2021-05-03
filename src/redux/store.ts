import BookService from '@services/BookService';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {ExtraArguments} from '../redux/types';

import booksReducer from './books/reducer';

const rootReducer = combineReducers({ booksStore: booksReducer });

const extraArgs: ExtraArguments = {
  bookService: BookService,
}

const middlewares = [applyMiddleware(thunk.withExtraArgument(extraArgs))];

const store = createStore(rootReducer, compose(...middlewares));

export default store;
