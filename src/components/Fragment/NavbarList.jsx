import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarList(props) {
    const { condition, title, location, logo } = props
    return (
        <li className="nav-item">
            <NavLink to={location} className={`nav-link text-light me-2 ${condition}`} aria-current="page" > {logo} {title} </NavLink>
        </li>
    )
}

export default NavbarList