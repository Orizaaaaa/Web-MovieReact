import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import Button from '../components/Elements/Button'
import { CaretRightFill } from 'react-bootstrap-icons'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { getMovie } from '../services/popularMovie'
import { StarFill } from 'react-bootstrap-icons'
import PopularMovies from '../components/Fragment/PopularMovies'

function Home() {
    const [movies, setMovie] = useState([])
    const [loading, setLoading] = useState(false);
    const [popularLoad, setPopularLoad] = useState('d-none')

    useEffect(() => {
        setLoading(true);
        getMovie((results) => {
            setTimeout(() => {
                setPopularLoad('d-block')
                setLoading(false);
                setMovie(results);
            }, 500);
        });
    }, []);


    return (
        <AuthLayout>

            {loading ? (<div className=" loading d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
                :
                (
                    <section className='homePage' >
                        <Splide
                            options={{
                                arrows: false,
                                autoplay: true,
                                perPage: 1,
                                pagination: false

                            }}
                        >

                            {movies.map((movie) => (
                                <SplideSlide key={movie.id}>
                                    <section className="moviesCaraosel d-flex ">
                                        <div className="title">
                                            <h1>{movie.title}</h1>

                                            <div className="buttonGenre d-flex">
                                                <Button variant='Action' />
                                                <Button variant='Thriller' />
                                            </div>

                                            <div className="rate">
                                                <div className="progress " role="progressbar" aria-label="Basic example">
                                                    <div className="progress-bar" style={{ width: `${(movie.vote_average / 10) * 100}%` }}></div>
                                                </div>
                                                <p className='ms-1 mt-1 d-flex align-items-center' > Rate {movie.vote_average} <StarFill className='ms-2' /> </p>
                                            </div>

                                            <p>{movie.overview}</p>

                                            <div className='watchNow'>
                                                <button >
                                                    <CaretRightFill className='me-2' /> Watch Now
                                                </button>
                                            </div>

                                        </div>

                                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                                        <div className="gradient"></div>

                                    </section>
                                </SplideSlide>
                            ))}

                        </Splide>

                        <section className={`popularMovies ${popularLoad}`} >
                            <PopularMovies />
                        </section>


                    </section>
                )

            }


        </AuthLayout >
    )
}

export default Home