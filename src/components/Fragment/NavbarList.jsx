import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarList(props) {
    const { condition, title, location } = props
    return (
        <li className="nav-item">
            <NavLink to={location} className={`nav-link active me-2 ${condition}`} aria-current="page" > {title} </NavLink>
        </li>
    )
}

export default NavbarList