import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from './types'; // Import the 'Post' type from the appropriate module

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Use a valid API URL
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({ // Specify that this endpoint returns an array of Post objects
      query: () => '/posts',
    }),
    getPostById: builder.query<Post, number>({ // Specify that this endpoint requires a number and returns a Post object
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = apiSlice;
