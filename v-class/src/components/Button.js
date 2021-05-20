import React from 'react'
import './Button.css'


function Button({name}) {
    return (
        <div className = 'btn'>
        <h3>{name}</h3>
    </div>
    )
}

export default Button

// <div cassName='button'>
//             <h2 className="btn">{name}</h2>
    
//         </div>