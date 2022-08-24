import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Stat {
  value: number
  name: string
}

interface Pokemon {
  id: number
  name: string
  abilities: string[]
  front_image_url: string
  stats: Array<Stat>
}

export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/"
  }),
  endpoints(builder){
    return{
      fetchPokemon: builder.query<Pokemon, string>({
        query(name = 'charizard'){
          return `/pokemon/${name}`;
        }
      })
    }
  }
})

export const { useFetchPokemonQuery } = pokemonApi;