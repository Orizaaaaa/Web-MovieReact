import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovie } from '../services/detailMovie'
import AuthLayout from '../components/Layout/AuthLayout'
import { caraosel, logoflix, vertImage } from '../image'




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
                <div style={{
                    backgroundImage: `url('${caraosel}')`,
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '77vh',
                    backgroundAttachment: 'fixed',
                }}
                >

                    <div className='insideParalax d-grid justify-content-center'  >
                        <div className="row">
                            <div className="col col-5 ">
                                <img src={vertImage} alt="" />
                            </div>
                            <div className="col col-7  ">
                                <h1>Elemental 2023</h1>

                                <p>In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </AuthLayout>
    )
}

export default DetailMovie