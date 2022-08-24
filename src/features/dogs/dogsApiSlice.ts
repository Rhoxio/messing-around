import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = "live_X4Bj2rPDYBmZdu2lBni8kORxs7Rfd3ALJWnFtuwkuNGnx5AT7eFVywtzkWNwxxqs"

interface Breed {
  id: string
  name: string
  image:{
    url: string
  }
}

export const apiSlice = createApi({
  reducerPath: 'apix',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers){
      headers.set('x-api-key', DOGS_API_KEY)
      return headers
    }
  }),
  endpoints(builder){
    return{
      fetchBreeds: builder.query<Breed[], number|void>({
        query(limit = 10){
          return `/breeds?limit=${limit}`;
        }
      })
    }
  }
})

// This programatically generates the hooks needed and sets the type assignments
// so I don't have to manually write hooks. 
export const { useFetchBreedsQuery } = apiSlice;