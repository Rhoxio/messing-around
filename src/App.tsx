import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useAppDispatch, useAppSelector } from "./app/hooks"

import {useFetchPokemonQuery} from "./features/pokemon/pokemonApi"
import './App.css'

function App() {
  
  const dispatch = useAppDispatch();

  const [pokemonName, setPokemon] = useState("charizard")
  const {data, error, isLoading} = useFetchPokemonQuery(pokemonName)

  function handleInput(event){
    dispatch(setPokemon(event.target.value))
  }

  function displayData(e){
    console.log(data)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{pokemonName}</p>
        <button onClick={displayData}/>

        <input type="text" name="pokemon-name" onChange={handleInput}/>

        <div>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>{data.species.name}</h3>
              <img src={data.sprites.front_shiny} alt={data.species.name} />
            </>
          ) : null}
        </div>

      </div>
    </div>
  )
}

export default App
