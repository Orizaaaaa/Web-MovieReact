import React, { useEffect, useState } from 'react'
import { getMovie } from '../../services/popularMovie'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';




function PopularMovies() {
    const [movies, setMovie] = useState([])

    useEffect(() => {
        getMovie((results) => {
            setMovie(results)
        })
    }, []);

    return (

        <div className="caraoselPopular">
            <h3>POPULAR MOVIES</h3>
            <Splide
                options={{
                    rewind: true,
                    arrows: false,
                    type: 'loop',
                    autoplay: true,
                    perPage: 5,
                    gap: 10,
                    pagination: false
                }}
            >
                {movies.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100 h-75 mb-3 rounded-3" />
                    </SplideSlide>
                ))}

            </Splide>
        </div>




    )
}

export default PopularMovies