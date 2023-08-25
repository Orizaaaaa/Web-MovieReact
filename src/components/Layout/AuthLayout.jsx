import React from 'react'
import NavbarList from '../Fragment/NavbarList'
import Button from '../Elements/Button'
import { logoflix } from '../../image'

function AuthLayout(props) {
    const { children } = props
    return (
        <>
            <nav className="navbar navbar-expand-lg position-fixed w-100">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#"><img src={logoflix} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <NavbarList title='Home' location='/Home' condition='active' />
                            <NavbarList title='Movies' location='/Movies' />
                            <NavbarList title='Tv Series' />
                            <NavbarList title='Search' />
                        </ul>
                        <Button variant='SIGN IN' />
                    </div>
                </div>
            </nav>

            <main className="page-content">
                {children}
            </main>
        </>
    )
}

export default AuthLayout