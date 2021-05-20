import React from 'react'
import './Notice.css'
import axios from 'axios'


function Notice({subject,classwork,id,showfunctn}) {

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

        </div>
    )
}

export default Notice
