import React from 'react'
import axios from 'axios'
import './Form'
import StudentNotice from './StudentNotice'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subject: '', classwork: '' ,return_data:[]};


        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleClassworkChange = this.handleClassworkChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.work = this.work.bind(this);
        this.showNotice = this.showNotice.bind(this);
        this.Ret_data = this.Ret_data.bind(this);
    }

    handleSubjectChange(event) {
        this.setState({ subject: event.target.value, classwork: this.state.classwork});
    }
    handleClassworkChange(event) {
        this.setState({ subject: this.state.subject, classwork: event.target.value});
    }

    showNotice(props){


    }
    
    work(event){
       
       axios.get(`http://127.0.0.1:8000/teacher/classroom/`)
       .then(res => {
           console.log('this is response data')
        //    console.log(res.data[0].subject)
            // this.response_data.return_data = res.data
            this.setState({return_data:res.data})

            // console.log(typeof(this.state.return_data))

           console.log(this.state.return_data)

            // console.log(this.response_data.return_data)

           // const classroom_data = res.data;
        //    const classroom_data = res.data.map((cw)=>{
        //      console.log(cw)
           })
// });
           console.log('doing')
        //    console.log(this.state)
           console.log(" done sie")
        //    console.log(this.response_data.return_data)
        
        

   }

   Ret_data(event){
    let Data = this.state.return_data;
    return (
        <h1>Hello</h1>
    )
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


        axios.post(`http://127.0.0.1:8000/teacher/classroom/`, { Subject:this.state.subject ,Classwork:this.state.classwork})
        .then(res => {
            console.log(res.data)
            // this.setState = {subject: '', classwork: '' ,return_data:[]}
            
        })

        // this.setState = {subject: '', classwork: '' ,return_data:[]}
        event.target.reset();

   }

   render() {
        return (
            <div>
            <div className="classroom">
                
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="labels">
                        <label className="class_label">
                            <h3 className="subject">Student :</h3>
                            <input className="subject_input" type="text" subject={this.state.subject} onChange={this.handleSubjectChange} />
                        </label>
                        <label className="class_label">
                            <h3 className="classwork">Question :</h3>
                            <input className="classwork_input" type="text" subject={this.state.subject} onChange={this.handleClassworkChange} />
                        </label>
                       
                    </div>
                    <input type="submit" value="Submit" className="submit_btn" />

                </form>

                <button className="submit_btn" onClick={this.work}>Show Classwork</button>
               
            </div>
            
            {
                this.state.return_data.map((Note,index)=>{
                    console.log(Note)
                    return (<StudentNotice subject={Note.subject} classwork={Note.classwork} id={Note.id} showfunctn={this.work}/>)
                })
            }

            </div>

        );
    }
}
export default Form

