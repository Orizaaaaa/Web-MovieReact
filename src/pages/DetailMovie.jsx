import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovie } from '../services/detailMovie'
import AuthLayout from '../components/Layout/AuthLayout'
import { caraosel, logoflix, vertImage } from '../image'
import { CaretRightFill, StarFill } from 'react-bootstrap-icons'
import Button from '../components/Elements/Button'





function DetailMovie() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getDetailMovie(id, (data) => {
            setMovie(data)
        })
    }, [id]);

    console.log(movie);


    return (
        <AuthLayout>
            <div className="detailMovies">


                <div className='backgroundParalax' style={{
                    backgroundImage: `url('${caraosel}')`,
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '77vh',
                    backgroundAttachment: 'fixed',
                }}
                >

                    <div className='insideParalax d-grid justify-content-center'  >
                        <div className="row">
                            <div className="col left col-5 ">
                                <img src={vertImage} alt="" />
                            </div>
                            <div className="col right col-7  ">
                                <h1>Elemental 2023</h1>
                                <div className="rate mt-5 mb-4">
                                    <div className="progress " role="progressbar" aria-label="Basic example">
                                        <div className="progress-bar" style={{ width: `${(6.7 / 10) * 100}%` }}></div>
                                    </div>
                                    <p className='ms-1 mt-1 d-flex align-items-center' > Rate {6.7} <StarFill className='ms-2' /> </p>
                                </div>
                                <div className="buttonGenre d-flex">
                                    <Button variant='Action' />
                                    <Button variant='Thriller' />
                                </div>
                                <p>In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.</p>
                                <div className='watchNow mt-4'>
                                    <button >
                                        <CaretRightFill className='me-2' /> Watch Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </AuthLayout>
    )
}

export default DetailMovie