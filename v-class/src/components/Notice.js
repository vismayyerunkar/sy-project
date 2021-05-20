import React from 'react'
import './Notice.css'
import axios from 'axios'


function Notice({subject,classwork,id,showfunctn}) {

    const deleteNotice=(event)=>{
        axios.delete(`http://127.0.0.1:8000/teacher/classroom/${id}`).then(()=>{
            showfunctn();
        })
        console.log(id)
        alert('This Notice will be deleted')


    }

    return (
        <div className='notice'>
            <div className="notice_div">
                <h2 className="notice_heading_1">Subject :  </h2>
                <h3 className="data_value">{subject}</h3>
            </div>
            <div className="notice_div">
                <h2 className="notice_heading_1">Classwork : </h2>
                <h3 className="data_value">{classwork}</h3>
            </div>

            <button className='deletebtn' onClick={deleteNotice} > Delete</button>
        </div>
    )
}

export default Notice
