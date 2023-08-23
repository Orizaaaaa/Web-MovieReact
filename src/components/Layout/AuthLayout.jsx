import React from 'react'
import NavbarList from '../Fragment/NavbarList'

function AuthLayout(props) {
    const { children } = props
    return (
        <main>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <NavbarList title='Home' location='/Home' />
                            <NavbarList title='Movies' location='/Movies' />
                            <NavbarList title='Tv Series' />
                            <NavbarList title='Search' />
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="page-content">
                {children}
            </div>
        </main>
    )
}

export default AuthLayout