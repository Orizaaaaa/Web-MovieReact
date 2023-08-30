import React, { useEffect, useState } from 'react'
import { getMovie } from '../../services/popularMovie'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { StarFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';




function PopularMovies() {
    const [movies, setMovie] = useState([])

    useEffect(() => {
        getMovie((results) => {
            setMovie(results)
        })
    }, []);

    return (

        <div className="caraoselPopular">
            <h3 >POPULAR MOVIES</h3>
            <Splide
                options={{
                    rewind: true,
                    arrows: false,
                    autoplay: true,
                    perPage: 5,
                    gap: 5,
                    pagination: false,
                    breakpoints: {
                        992: {
                            perPage: 4,
                        },
                        730: {
                            perPage: 3,
                        }
                    }

                }}
            >
                {movies.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <div className="cardPopular">

                            <NavLink to={'/Movies'}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100 h-75 mb-3 rounded-3" />
                            </NavLink>

                            <div className="rate mx-auto w-100 p-2">
                                <h4>{movie.title}</h4>
                                <div className="progress " role="progressbar" aria-label="Basic example">
                                    <div className="progress-bar" style={{ width: `${(movie.vote_average / 10) * 100}%` }}></div>
                                </div>
                                <p className='ms-1 mt-1 d-flex align-items-center' > Rate {movie.vote_average} <StarFill className='ms-2' /> </p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}

            </Splide>
        </div>




    )
}

export default PopularMovies