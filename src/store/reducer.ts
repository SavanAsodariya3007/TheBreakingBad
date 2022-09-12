import {combineReducers} from '@reduxjs/toolkit';
import {favouriteReducer} from './slice/favourite';

export const reducer = combineReducers({
  favourite: favouriteReducer,
});
