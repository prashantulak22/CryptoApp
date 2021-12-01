import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'e7b68047e4mshf050483d061b626p190976jsn4f426e842e18'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
      reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({ baseUrl }),
      endpoints: (builder) => ({
            getCryptos: builder.query({
                  query: (count) => createRequest(`/coins?limit=${count}`),
            })
      })
})

export const { useGetCryptosQuery } = cryptoApi; 