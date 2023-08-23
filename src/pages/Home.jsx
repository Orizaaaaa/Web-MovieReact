import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { caraosel } from '../image'

function Home() {
    return (
        <AuthLayout>
            <section className='homePage' >
                <div className="moviesCaraosel d-flex ">
                    <img src={caraosel} alt="" />
                </div>
            </section>
        </AuthLayout>
    )
}

export default Home