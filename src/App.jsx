import './index.css'
import { getMovie } from './services/popularMovie'
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovie] = useState([])

  useEffect(() => {
    getMovie((results) => {
      setMovie(results)
    })
  }, []);

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleButton = () => {
    console.log(inputValue);
  }



  return (
    <>
      <h1 className=' d-grid justify-content-center' >Search Movie</h1>
      <div className="searchMovie">
        <div className="input-group mb-3 w-50 h-1 mx-auto  ">
          <input onChange={handleInputChange} value={inputValue} type="text" className="form-control shadow-none " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button onClick={handleButton} className="btn btn-primary" type="button" id="button-addon2">Button</button>
        </div>
      </div>

      <section className="project mt-5 d-flex align-items-center">
        <div className="container">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">

            {movies.length > 0 && movies.map((movie) => (
              <div className="col" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100 mb-3 rounded-3" />
                <h5 className="fw-bold">{movie.title}</h5>
                <p>{movie.overview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default App

