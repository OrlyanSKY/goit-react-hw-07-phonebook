import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );

      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
