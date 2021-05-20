import React from 'react'
import './Body.css'
import bg from '../Media/bg.svg'
import Button from './Button'
import {
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
// import Navitem from './Navitem.js'

  


function Body() {
    return (
        <div className='body'>
            <h3 >Lets change the way we study</h3>
            <h2>Start your journey to transform the virtual learning </h2>
            <img src={bg} alt="Sorry image loading failed" />      
            <React.Fragment className='btns'>


                <Link className="link" to='/teacher-login'><Button className="teacher" name="Teacher"/></Link>
                <Link className="link" to='/student-login'><Button className="student" name="Student"/></Link>



                {/*<Link className="link" to='/teacher'><Button className="teacher" name="Teacher"/></Link>
                <Link className="link" to='/student'><Button className="student" name="Student"/></Link>*/}



                
                {/*<Link className="link-2" to='/teacher/registration'><Navitem className="teacher" name="Teacher"/></Link>
                <Link className="link-2" to='/student/registration'><Navitem className="student" name="Student"/></Link>
    */}
                

            </React.Fragment>
  
        </div>
    )
}

export default Body;
