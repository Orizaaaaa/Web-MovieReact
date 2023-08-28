import React, { useEffect, useState } from 'react'
import { getGenre } from '../../services/genreMovie';
import { Button } from 'bootstrap';

function GenreCard() {
    const [genre, setGenre] = useState([])
    useEffect(() => {
        getGenre((data) => {
            setGenre(data)
            console.log(data);
        })

    }, []);


    return (
        <>



            <Button variant='Thriller' />
        </>

    )
}

export default GenreCard