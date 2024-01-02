// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API endpoint

// Create an instance of createApi
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // Define your table endpoint
    getTable: builder.query({
      query: () => 'table', // Replace with your actual table endpoint
    }),
  }),
});

// Export the hooks for each endpoint
export const { useGetTableQuery } = api;
