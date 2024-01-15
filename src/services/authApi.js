import {apiSlice} from '../redux/apiSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    endpoints: builder => ({
      validateKey: builder.query({
        query: val => ({
          url: '/v1/validatekey',
          params: {
            mKey: val,
          },
        }),
      }),
      loginUser: builder.mutation({
        query: body => ({
          url: '/v1/login',
          method: 'post',
          body,
          headers: async () => {
            const ekey = await AsyncStorage.getItem('ekey');

            return {
              ekey: ekey,
            };
          },
        }),
      }),
    }),
  }),
});
export const {useLoginUserMutation, useValidateKeyQuery} = authApi;
