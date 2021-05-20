import React from 'react'
import SideOption from './SideOption'
import {
    // Switch,
    // Route,
    Link
} from "react-router-dom";

function StudentSidebar() {
    return (
       
        <React.Fragment>
            <div className="teacherSidebar">
            <Link className="teacher__link" to='/student'>
            <h1 className="user">Student</h1>

            </Link>
                <Link className="sideoption" to='/student/classroom'>
                    <SideOption title="Classroom" />

                </Link>
                <SideOption className="options" title="Notice" />
                <SideOption className="options" title="Students" />
      


            </div>
        </React.Fragment>
    )
}

export default StudentSidebar
