import React from 'react'
import './Content.css'
// import CreateRoom from '../videocall/CreateRoom'
// import Room from '../videocall/Room'
import {
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
  
function Content() {
    return (
        <div className="content">
            <Link className="link" to='/teacher/newroom'>
                <button> start lec</button>

            </Link>
        </div>
    )
}

export default Content
