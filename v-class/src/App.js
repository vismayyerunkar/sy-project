import React from 'react';
import './App.css';
// import Header from './components/Header.js'
// import Body from './components/Body.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact.js'
import Parent from './components/Parent.js'
import UserGuide from './components/Userguide'
import Home from './components/Home.js'
import CreateRoom from './videocall/CreateRoom'
import Room from './videocall/Room'
import Teacher from './components/Teacher'
import TeacherLogin from './components/TeacherLogin'
import TeacherRegistration from './components/TeacherRegistration'
import Lecture from './components/Lecture'
import Classroom from './components/Classroom'
import Student from './components/Student'
import StudentRegistration from './components/StudentRegistration'
import StudentLogin from './components/StudentLogin'
import StudentClassroom from './components/StudentClassroom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/" exact component={Home}>
          </Route>
          <Route exact path="/userGuide" component={UserGuide}>
          </Route>
          <Route exact path="/Parent" component={Parent}>
          </Route>
          <Route exact path="/Contact" component={Contact}>
          </Route>
          <Route exact path="/About" component={About}>

          </Route>
          <Route exact path="/room/:roomID" component={Room} />

          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/student" component={Student} />

          <Route exact path="/student-register" component={StudentRegistration} />
          <Route exact path="/student-login" component={StudentLogin} />


          <Route exact path="/teacher-register" component={TeacherRegistration} />
          <Route exact path="/teacher-login" component={TeacherLogin} />



          <Route exact path="/teacher/newroom" component={CreateRoom} />
          <Route exact path="/teacher/lecture" component={Lecture} />
          <Route path="/teacher/classroom/"><Classroom/></Route> 
          <Route path="/student/classroom/"><StudentClassroom/></Route> 

        </Switch>


      </div>


    </Router>
  );
}

export default App;



