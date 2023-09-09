import React, { useState } from 'react'
import NavbarList from '../Fragment/NavbarList'
import Button from '../Elements/Button'
import { logoflix } from '../../image'
import { HouseFill, PlayBtn, Search, Tv } from 'react-bootstrap-icons'
import ButtonSideBar from '../Fragment/buttonSideBar'

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

                    <ButtonSideBar />

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
                    <img src={logoflix} alt="" />
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body ">
                    <ul className="navbar-nav  ">
                        <NavbarList logo={<HouseFill className='mb-1 me-3' />} title='Home' location='/Home' condition='active' />
                        <NavbarList logo={<PlayBtn className='mb-1 me-3' />} title='Movies' location='/Movies' />
                        <NavbarList logo={<Tv className='mb-1 me-3' />} title='Tv Series' />
                        <NavbarList logo={<Search className='mb-1 me-3' />} title='Search' />
                    </ul>
                </div>
            </div>
            <main className="page-content">
                {children}
            </main>
        </>
    )
}

export default AuthLayout