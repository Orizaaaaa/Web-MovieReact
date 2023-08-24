import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { caraosel } from '../image'
import Button from '../components/Elements/Button'
import { CaretRightFill } from 'react-bootstrap-icons'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getMovie } from '../services/popularMovie'

function Home() {
    const [movies, setMovie] = useState([])

    useEffect(() => {
        getMovie((results) => {
            setMovie(results)
        })
    }, []);

    return (
        <AuthLayout>
            <section className='homePage' >

                <div className="moviesCaraosel d-flex  ">
                    <div className="title">
                        <h1>Talk to Me</h1>
                        <div className="buttonCaraosel d-flex">
                            <Button variant='Horror' />
                            <Button variant='Thriller' />
                        </div>

                        <div className="rate">
                            <div className="progress " role="progressbar" aria-label="Basic example">
                                <div className="progress-bar" style={{ width: `${(7.2 / 10) * 100}%` }}></div>
                            </div>
                            <p className='ms-1 mt-1' >7.2 Rate</p>
                        </div>

                        <p>When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked
                            on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.</p>

                        <div className='watchNow'>
                            <button >
                                <CaretRightFill className='me-2' /> Watch Now
                            </button>
                        </div>
                    </div>

                    <img src={caraosel} alt="" />
                    <div className="gradient"></div>

                </div>

            </section>
        </AuthLayout >
    )
}

export default Home