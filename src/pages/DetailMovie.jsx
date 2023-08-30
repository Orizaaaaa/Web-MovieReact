import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovie } from '../services/detailMovie'
import { getMovie } from '../services/popularMovie'
import { Key } from 'react-bootstrap-icons'

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
        <>
            <div>DetailMovie {id}</div>

        </>
    )
}

export default DetailMovie