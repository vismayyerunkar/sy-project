import React from 'react'
import TeacherNav from "./TeacherNav"
import './Meet.css'

import Content from'./Content'
// import Classroom from './Classroom'


function Meet() {
    return (
        <div className="meet">
        <TeacherNav/>
        <hr/>
        <Content className="meet_content"/>

       
            
        </div>
    )
}

export default Meet;

