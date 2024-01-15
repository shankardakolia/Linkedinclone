import AsyncStorage from '@react-native-async-storage/async-storage';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiUrl = 'https://erplead.remserp.com/api';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: async headers => {
      // Use AsyncStorage instead of localStorage
      const token = await AsyncStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Standard'],
  endpoints: builder => ({}),
});
