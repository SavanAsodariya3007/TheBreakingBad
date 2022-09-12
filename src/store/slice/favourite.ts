import {ICharacter} from '@common';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ICharacter[] = [];

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addNewCharacter: (state, {payload}: PayloadAction<ICharacter>) => {
      state.push(payload);
      return state;
    },
    removeCharacter: (state, {payload}: PayloadAction<ICharacter>) => {
      return state.filter(character => character.char_id !== payload.char_id);
    },
  },
});

export const {addNewCharacter, removeCharacter} = favouriteSlice.actions;
export const favouriteReducer = favouriteSlice.reducer;
