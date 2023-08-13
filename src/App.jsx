import './index.css'
import { getMovie } from './services/popularMovie'
import { useState, useEffect } from 'react'

function App() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    getMovie((data) => {
      setMovie(data)
    })
  }, []);

  console.log(movie);

  return (
    <>
      <h1>HAI</h1>
    </>
  )
}

export default App
