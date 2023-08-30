import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import GenreCard from '../components/Fragment/GenreCard'

function Movies() {
    return (
        <AuthLayout>
            {/* <GenreCard /> */}
            {/* <Button variant={`${movie.genre_ids.shift()}`} /> */}
            {/* <GenreCard genreName={`${movie.genre_ids.shift()}`} /> */}
        </AuthLayout>
    )
}

export default Movies