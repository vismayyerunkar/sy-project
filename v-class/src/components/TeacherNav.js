import React from 'react'
import './TeacherNav.css'
import {useSelector,useDispatch} from 'react-redux'


function TeacherNav() {
    const subject = JSON.parse(localStorage.getItem('subject'))
    const is_student = JSON.parse(localStorage.getItem('is_student'))

    return (
        <div className="teacher_nav">
            <h2 className="name">Subject</h2>
            <h2 className="subject_value">{subject}</h2>
        </div>
    )
}

export default TeacherNav
