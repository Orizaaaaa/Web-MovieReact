import React, { useState } from 'react'
import NavbarList from '../Fragment/NavbarList'
import Button from '../Elements/Button'
import { logoflix } from '../../image'
import { JustifyLeft } from 'react-bootstrap-icons'

function AuthLayout(props) {
    const { children } = props

    const [navbarBg, setnavbarBg] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setnavbarBg(true)
        } else {
            setnavbarBg(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    return (
        <>
            <nav className={`navbar ${navbarBg ? 'navbarbgActive' : ''} navbar-expand-lg position-fixed w-100`}>
                <div className="container-fluid ">

                    <a className="navbar-brand" href="#"><img src={logoflix} alt="" /></a>

                    <button className="btn d-lg-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
                        aria-expanded="false" aria-label="Toggle navigation"><JustifyLeft /></button>


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
            </nav >

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p className='text-black'>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
            <main className="page-content">
                {children}
            </main>
        </>
    )
}

export default AuthLayout