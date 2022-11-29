import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637fe7848efcfcedacf9b0a3.mockapi.io/api/v1/';

// All contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

// Add new contact

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, { rejectWithValue }) => {
    const { name, phone } = newContact;
    try {
      const postContact = await axios.post('/contacts', {
        name,
        phone,
      });

      return postContact.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete contact

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const delContact = await axios.delete(`/contacts/${id}`);
      return delContact.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
