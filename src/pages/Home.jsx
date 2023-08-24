import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { caraosel } from '../image'

function Home() {
    return (
        <AuthLayout>
            <section className='homePage' >
                <div className="moviesCaraosel d-flex  ">
                    <div className='title' >
                        <p>babi</p>
                    </div>
                    <img src={caraosel} alt="" />
                    <div className="gradient">

                    </div>
                </div>
            </section>
        </AuthLayout>
    )
}

export default Home