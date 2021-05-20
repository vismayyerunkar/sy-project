import React ,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import './TeacherLogin.css'
// import Button from "react-bootstrap/Button";
import { Grid,Paper, Avatar, TextField, Typography,Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ClearIcon from '@material-ui/icons/Clear';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import { loginSuccess } from '.././Redux/Reducers/loginSuccess.js'
import { ValidateLogin } from '.././Redux/actions/action.js'
import LinearProgress from '@material-ui/core/LinearProgress';




function TeacherLogin() {
    
    const [Loading,setLoading] = useState(false)
    const [error,seterror] = useState(false)
    const [errormsg,seterrormsg] = useState(false)
    const backendUrl = 'http://127.0.0.1:8000'
   

    const login = useSelector(state=>state.login);
    const dispatch = useDispatch();


     const useStyles = makeStyles((theme) => ({

        margin: {
        margin: theme.spacing(1),
        },

    }));

    const classes = useStyles();



const handleEmailChange=(event)=>{
    let email =  event.target.value
    let password =  login.password
    let submit = false
    dispatch(ValidateLogin(email,password,submit))

}  

const handlePasswordChange=(event)=>{
    let password = event.target.value
    let email = login.email
    let submit = false
    dispatch(ValidateLogin(email,password,submit))
  
}  

function handleSubmit(event) {
    event.preventDefault();

    let email = login.email
    let password = login.password

    if((!login.PassError && !login.EmailError)&& (email && password) ){
          


        // dispatch(HandleSubmit(email,password))
        setLoading(true)
        axios.post(`${backendUrl}/user/login/`,{
            email:login.email,
            password:login.password,
            is_student:false,
            subject:""
        }).then((response)=>{
            setLoading(false)
            console.log(response)


                if(response.status === 200){
                    localStorage.setItem('access',JSON.stringify(response.data.tokens.access))
                    localStorage.setItem('refresh',JSON.stringify(response.data.tokens.refresh))
                    localStorage.setItem('subject',JSON.stringify(response.data.subject))
                    localStorage.setItem('is_student',JSON.stringify(response.data.is_student))
                    window.location.href = "/teacher";

                    // dispatch({type:'LOGIN_SUCCESS',email:response.data.email,subject:response.data.subject,is_student:response.data.is_student})
                }
            }).catch(error => {
                setLoading(false)
                seterror(true)

                if(error.response.status === 401){
                    seterrormsg("Username and password Invalid")
                }else{
                    seterrormsg("Something went wrong")
                }
                

                })
        

    }else{
        dispatch(ValidateLogin(email,password))
    }
    console.log(`${backendUrl}/user/login`)
    console.log("logged in with email :"+email)
    console.log("logged in with password :"+password)

}


    return(
         <div className={"login-form-bg-active"}>


        <div className="login-form">



            <h2 id="login-logo">Teacher Login</h2>

            {Loading ?<LinearProgress id="linear-loading" /> : ""}


            <div className="login-email">

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField helperText={login.EmailError ? login.error_text.emailError:""} value={login.email} error={login.EmailError? true:false} type="email" id="login-email" label="Email" onChange={(e)=>handleEmailChange(e)}/>
                    </Grid>
                    </Grid>
                </div>
            </div>

            <div className="login-password">

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKeyIcon />
                    </Grid>
                    <Grid item>
                        <TextField helperText={login.PassError ? login.error_text.passError:""} value={login.password} error={login.PassError? true:false} id="login-password" type="password" label="Password" onChange={(e)=>handlePasswordChange(e)} />
                    </Grid>
                    </Grid>

                </div>
                <div>


            </div>

        </div>

        
        <button id="login-btn" className="login-button" onClick={(e)=>handleSubmit(e)} type="submit">Submit</button>

         
                <h5 id="forgot-password">Forgot Password ?</h5>

                <div id="no-account">
                <h5>Don't have an account ? </h5>
                    <NavLink activeClassName="active" className="link" to='/teacher-register' exact>
                        <h4 id="create-account">Create one</h4>
                    </NavLink>
                </div>
            
            </div>

        </div>
    )
}
export default TeacherLogin
