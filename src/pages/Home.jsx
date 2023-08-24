import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { caraosel } from '../image'

function Home() {

    return (
        <AuthLayout>
            <section className='homePage' >
                <div className="moviesCaraosel d-flex  ">
                    <div className="title">
                        <h1>Talk to Me</h1>
                        <div className="progress" role="progressbar" aria-label="Basic example">
                            <div className="progress-bar" style={{ width: `${(7.2 / 10) * 100}%` }}></div>
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