import React from 'react'
import { JustifyLeft, JustifyRight } from 'react-bootstrap-icons'

function ButtonSideBar() {
    return (
        <>
            <JustifyRight className="d-lg-none btnRight " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
                aria-expanded="false" aria-label="Toggle navigation"></JustifyRight>
        </>
    )
}

export default ButtonSideBar