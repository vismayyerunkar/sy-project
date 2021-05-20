import React from 'react'
import './Navitem.css'
function Navitem({name , icon}) {
    return (
        <div className = 'navitem'>
            <h3>{name}</h3>
        </div>
    )
}

export default Navitem
