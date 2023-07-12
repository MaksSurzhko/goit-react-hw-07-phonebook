// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://64ad3d74b470006a5ec5975a.mockapi.io';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // export const addContact = createAsyncThunk(
// //   'contacts/addContact',
// //   async ({ name, number }, { rejectWithValue }) => {
// //     try {
// //         const response = await axios.post('/contacts', { name, phone });
// //       return response.data;
// //     } catch (error) {
// //       return rejectWithValue(error.message);
// //     }
// //   }
// // );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/contacts', { name, number });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


import axios from 'axios';

const BASE_URL = 'https://64a3e265c3b509573b56b3e7.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const postContact = async newContact => {
  await axios.post(`${BASE_URL}/contacts`, newContact);
};

export const delContact = async contactId => {
  await axios.delete(`${BASE_URL}/contacts/${contactId}`);
};