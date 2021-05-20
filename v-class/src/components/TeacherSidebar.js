import React from 'react'
import './TeacherSidebar.css'
import SideOption from './SideOption'
import {
    // Switch,
    // Route,
    Link
} from "react-router-dom";

function TeacherSidebar() {
    return (

        <React.Fragment>
            <div className="teacherSidebar">
            <Link className="teacher__link" to='/teacher'>
                <h1 className="user">Teacher</h1>

            </Link>

                <Link className="sideoption" to='/teacher/classroom'>
                    <SideOption title="Classroom" />

                </Link>
                <SideOption className="options" title="Notice" />
                <SideOption className="options" title="Students" />
      


            </div>
        </React.Fragment>
    )
}

export default TeacherSidebar
// <Link className="newLink" to='/teacher/lecture'>
//                 <SideOption className="options" title="Lecture" />

//                 </Link>




// <SideOption className="options" title="Teacher" />