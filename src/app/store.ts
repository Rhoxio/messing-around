import {configureStore} from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query'
// import counterReducer from "../features/counter/counter-slice";
// import {apiSlice} from "../features/dogs/dogsApiSlice"
import {pokemonApi} from "../features/pokemon/pokemonApi"

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonApi.middleware)
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;