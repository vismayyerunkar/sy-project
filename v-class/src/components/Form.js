import React from 'react'
import TeacherSidebar from './TeacherSidebar'
// import TeacherNav from './TeacherNav'
import './Classroom.css'
import axios from 'axios'
import './Form.css'
import Notice from './Notice'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subject: '', classwork: '' ,return_data:[],warningmsg:false,warning:''};


        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleClassworkChange = this.handleClassworkChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.work = this.work.bind(this);
        this.showNotice = this.showNotice.bind(this);
        this.Ret_data = this.Ret_data.bind(this);
        this.showWarning = this.showWarning.bind(this);
        this.NoData = this.NoData.bind(this);
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
       console.log("hit work")

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


   }

   showWarning(){
      console.log(this.state.warning)
       console.log(this.state.warningmsg)
       if(this.state.warningmsg){
           return(
            <h5 className="warning_msg">{this.state.warning}</h5>
           )
       }
   }

   Ret_data(event){
    let Data = this.state.return_data;
    return (
        <h1>Hello</h1>
    )
   }

   NoData(){

    if(this.state.return_data){

        this.state.return_data.map((Note,index)=>{
            console.log(Note)
            return (<Notice key={Note.id} subject={Note.subject} classwork={Note.classwork} id={Note.id} showfunctn={this.work}/>)
        })


    }

    // this.setState({warningmsg:true,warning:"There is no classwork to show"})
    // console.log("Hello")
   }


   handleSubmit(event){

        event.preventDefault();

        if(!this.state.subject || !this.state.classwork){
            // this.setState({warningmsg:true,warning:"The subject or classwork cannot be kept blank"})
            alert('The subject or classwork cannot be kept blank ');
        }else{


            alert('A name was submitted: ' + this.state.subject);
            event.preventDefault();
                const classData = {
                    'subject':this.state.subject,
                    'classwork':this.state.classwork
                }


            axios.post(`http://127.0.0.1:8000/teacher/classroom/`, { Subject:this.state.subject ,Classwork:this.state.classwork})
            .then(res => {
                console.log(res.data)
                this.work();
                this.setState({ subject:'', classwork:''});
            })
            event.target.reset();

        }

   }

   render() {
        return (
            <div>
            <div className="classroom">
                
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="labels">
                        <label className="class_label">
                            <h3 className="subject">Subject :</h3>
                            <input className="subject_input" type="text" subject={this.state.subject} onChange={this.handleSubjectChange} />
                        </label>
                        <label className="class_label">
                            <h3 className="classwork">Classwork :</h3>
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
                    return (<Notice key={Note.id} subject={Note.subject} classwork={Note.classwork} id={Note.id} showfunctn={this.work}/>)
                })
            }

            {
                this.state.return_data.length > 0 ? null:<h3 className="warning_msg">No classwork to show</h3>
            }

            </div>

        );
    }
}
export default Form

