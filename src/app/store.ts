import {configureStore} from '@reduxjs/toolkit';
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