import React from 'react'

function Button(props) {
    const { variant } = props
    return (
        <button className=' btn-element' >{variant}</button>
    )
}

export default Button