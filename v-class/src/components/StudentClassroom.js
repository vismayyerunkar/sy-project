import React from 'react'
import axios from 'axios'
import Notice from './Notice'
import Form from './Form'
import StudentSidebar from './StudentSidebar'
import StudentForm from './StudentForm'

class Classroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subject: '', classwork: '' };

        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleClassworkChange = this.handleClassworkChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.work = this.work.bind(this);
    }

    handleSubjectChange(event) {
        this.setState({ subject: event.target.value, classwork: this.state.classwork});
    }
    handleClassworkChange(event) {
        this.setState({ subject: this.state.subject, classwork: event.target.value});
    }

  
    work(event){
       
        axios.get(`http://127.0.0.1:8000/teacher/classroom/`)
        .then(res => {
            // console.log(res.data)
            // const classroom_data = res.data;
            const classroom_data = res.data.map((cw)=>{
                // console.log('showing data')
              console.log(cw)
            })
            this.setState({ subject: this.state.subject, classwork: this.state.classwork ,returnData:classroom_data});          });
            console.log('doing')
            console.log(this.state)
            console.log(" done sie")
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.subject);
        event.preventDefault();
        // console.log(this.state)
        // console.log(this.state.classwork)

    const classData = {
        'subject':this.state.subject,
        'classwork':this.state.classwork
    }


    const classData_arr = [classData]
    // console.log(classData_arr[0].classwork)
    const recent = classData_arr.map((data)=>{

        console.log('this is data value')

        console.log(data)

    })

    console.log(' recent data')

}


    render() {
        return (
            <div>
            <div className="classroom">
                <StudentSidebar className="teacherSidebar" />              
                <StudentForm/>
                </div>
            </div>

        );
    }
}

export default Classroom

