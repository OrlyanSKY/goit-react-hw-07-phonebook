import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addFilterValue } = filterSlice.actions;
