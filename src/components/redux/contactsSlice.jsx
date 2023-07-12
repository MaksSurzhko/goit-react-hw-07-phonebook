import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './thunk';
import { getContacts, postContact, delContact } from '../redux/thunk';
import { createAsyncThunk } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null
};


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      await postContact(newContact);
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, { rejectWithValue }) => {
    try {
      await delContact(contactID);
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = '';
    },
    [fetchContacts.error]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = '';
    },
    [addContact.error]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = '';
    },
    [deleteContact.error]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },

});

// export const { deleteUser, addUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;