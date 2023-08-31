import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovie } from '../services/detailMovie'
import AuthLayout from '../components/Layout/AuthLayout'
import { caraosel, logoflix } from '../image'




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

                    <div className='insideParalax d-flex align-items-center justify-content-center'  >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque expedita tempora fugiat, aliquid suscipit libero tenetur incidunt praesentium dolorem deserunt officia perspiciatis distinctio assumenda mollitia labore voluptates recusandae explicabo pariatur!
                        Ipsam, cumque nesciunt! Dolores cupiditate nam facere beatae a omnis saepe labore reprehenderit! Aspernatur repellendus, aliquam repellat voluptatum beatae doloremque numquam aut velit cupiditate? Dolores nemo quis praesentium rem ab!
                        Vero dolores minima provident nam eaque dicta doloribus consequuntur repellendus a vitae cum eveniet dolorum dolore, iste commodi? Culpa quam ratione in delectus veritatis mollitia sunt dolorem tempore repudiandae asperiores.
                        Consectetur porro sequi saepe placeat excepturi nostrum necessitatibus facere veniam distinctio tempora. Dolorum tempore vitae numquam maiores excepturi necessitatibus! Velit a at animi libero numquam fuga, cumque incidunt odio nihil.
                        Deserunt, est ad ipsum dolorum odio sequi nesciunt fugit hic, aliquid expedita, impedit rerum distinctio. Minus molestias quisquam quo consectetur dolor veritatis natus necessitatibus doloribus, nisi ut quia aliquam exercitationem.

                    </div>

                </div>


            </div>
        </AuthLayout>
    )
}

export default DetailMovie