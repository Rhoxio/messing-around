import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useAppDispatch, useAppSelector } from "./app/hooks"
import {incremented, amountAdded } from "./features/counter/counter-slice"
import {useFetchBreedsQuery} from "./features/dogs/dogsApiSlice"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10)

  const {data = [], isFetching} = useFetchBreedsQuery(numDogs)

  function handleClick(){
    dispatch(amountAdded(5))
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
        <button onClick={handleClick} >
          count is {count}
        </button>

        <div>
          <div>
            <p>Dogs to fetch:</p>
            <select value={numDogs} onChange={ (e) => setNumDogs(Number(e.target.value)) } >
              <option value={"5"}>5</option>
              <option value={"10"}>10</option>
              <option value={"15"}>15</option>
              <option value={"20"}>20</option>
            </select>
          </div>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name:</th>
                <th>Photo:</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img height={250} src={breed.image.url}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
