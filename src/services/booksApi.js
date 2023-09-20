// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8000/books` }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ``,
    }),
    addBook:builder.mutation({
      query:(newbook)=>{
        return{
          url:``,
          method:'POST',
          body:newbook
        }
      }
    }),
    deleteBook:builder.mutation({
        query:(id)=>{
          return{
            url:`/${id}`,
            method:'DELETE',
            
          }
        }
    }),
    updateBook:builder.mutation({
      query:(updatedBook)=>{
        return{
          url:`/${updatedBook.id}`,
          method:'PUT',
          body:updatedBook
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllBooksQuery,useAddBookMutation,useLazyGetAllBooksQuery,useDeleteBookMutation,useUpdateBookMutation } = booksApi;