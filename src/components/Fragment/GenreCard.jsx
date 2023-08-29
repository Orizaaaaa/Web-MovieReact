import React, { useEffect, useState } from 'react'
import { getGenre } from '../../services/genreMovie';
import Button from '../Elements/Button';

function GenreCard(props) {
    const [genre, setGenre] = useState([])
    useEffect(() => {
        getGenre((genres) => {
            setGenre(genres)
            console.log(genres);
        })

    }, []);
    console.log(genre);

    const { genreName } = props

    return (
        <>
            <div className="buttonCaraosel d-flex">
                {genre.map((genres) => (
                    // <Button variant={genres[genreName]} />
                    <Button variant={`${genres}.${genreName}`} />
                ))}

                <Button variant='Thriller' />
            </div>
        </>

    )
}

export default GenreCard