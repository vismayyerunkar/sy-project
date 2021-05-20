import React ,{useState,useEffect} from 'react'
import './TeacherRegistration.css'
import axios from 'axios'
import {ValidateLogin} from '.././Redux/actions/action.js'
import {ToggleForm,HandleSubmit ,HandleRegisterSubmit,ValidateRegister} from '.././Redux/actions/action.js'
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { Grid,TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ClearIcon from '@material-ui/icons/Clear';
import {useHistory ,BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
// import Loading from '../Loading.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuBookIcon from '@material-ui/icons/MenuBook';


axios.defaults.xsrfHeaderName = "Authorization";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

function TeacherRegistration() {

    

    
    const [Loading,setLoading] = useState(false)
    const [Username,setUsername] = useState("")
    const [Subject,setSubject] = useState("")
    const [SubError,setSubError] = useState(false)

    const backendUrl = 'http://127.0.0.1:8000'

    const register = useSelector(state=>state.register);
    const Hideform = useSelector(state=>state.hideform.hiddenform);
    const dispatch = useDispatch();

    const useStyles = makeStyles((theme) => ({

        margin: {
        margin: theme.spacing(1),
        },

    }));
    const classes = useStyles();
  


const handleEmailChange=(event)=>{

    let email =  event.target.value
    let password =  register.password
    let confirm_password = register.confirm_password

    dispatch(ValidateRegister(email,password,confirm_password))

}  


const handleSubjectChange=(event)=>{

    // let email =  event.target.value
    // let password =  register.password
    // let confirm_password = register.confirm_password

    // dispatch(ValidateRegister(email,password,confirm_password))
    setSubject(event.target.value)

}  


const handlePasswordChange=(event)=>{

    let email = register.email
    let password = event.target.value
    let confirm_password = register.confirm_password
    console.log(password)
    dispatch(ValidateRegister(email,password,confirm_password))
  
}  

const handleConfirmPasswordChange=(event)=>{

    let email = register.email
    let password = register.password
    let confirm_password = event.target.value
    
    dispatch(ValidateRegister(email,password,confirm_password))
  }  


function HandleRegister(event) {

    event.preventDefault();

    let email = register.email
    let password = register.password
    let confirm_password = register.confirm_password


    if(password !== confirm_password){

        dispatch({
            type:'CONFIRM_PASSWORD',
            email:email,
            password:password,
            confirm_password:confirm_password,
            PassError:false,
            EmailError:false,
            PassErrorText: 'password does not matched !',
            PasswordMatchFailed:true,
        })
        
    }else if((!register.PassError && !register.EmailError)&& ((email && password) && (confirm_password)) ){

        console.log("done")
        dispatch(HandleRegisterSubmit(email,password,confirm_password))


        // loading is true
        setLoading(true);
        // Register the user

        axios.post(`${backendUrl}/user/register/`,
                    {email:register.email,
                    password:register.password,
                    subject:Subject,
                    is_student:false
                    })
                    .then((response)=>{
                        setLoading(false)
                        setUsername(response.data.data.username)
                        console.log("username",response.data.data.username)
                        //  localStorage.setItem('username',JSON.stringify(response.data))
                        // window.location.href = "/teacher-login";
                    }).catch(error => {
                        setLoading(false)
                        console.log("Update error", error);
                });

        console.log("Form submitted")

    }else{
        
        dispatch( {
            type:'REGISTER_INACTIVE',
            email:email,
            password:password,
            confirm_password:confirm_password,
            EmailError:true,
            EmailErrorText:'Email address is required',
            PassError:true,
            PassErrorText: 'Password is required',
        })
        
    }


    console.log("registered with email :"+email)
    console.log("registered with password :"+password)
    console.log("registered with password :"+confirm_password)

}

    
const showEmailMsg=()=>{

    return(
        <div className="email-sent">
            <h1 id="success">Success</h1>
            <h4 id="message">Hello <span id="username">{Username}</span> your registration is in progress.. Verification email has been sent to your email address</h4>
            <h4 id="login-warning">Please login after verification</h4>
            <button id="success-btn" onClick={()=>window.location.href = "/teacher-login"}>verified</button>
        </div>
    )
}
    


const GoBack = ()=>{
    
    window.history.back()
}

return (

        <div className="register-form-bg">

    
        {Loading ? (<h1 className="loading"><CircularProgress className="loading-circle"/></h1>):""}

        {Username ?showEmailMsg():""}


        <div className={ Loading || Username ? "register-form-inactive" :"register-form"}>



             <ClearIcon onClick={()=>GoBack()} id="register-cancel-icon"/>
            <h2 id="register-logo">Sign up</h2>

            <div className="register-cred">          

           <div>

            <div className="register-email">

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField helperText={register.EmailError ? register.error_text.emailError:""} value={register.email} error={register.EmailError ? true:false} type="email" id="register-email" label="Email" onChange={(e)=>handleEmailChange(e)}/>
                    </Grid>
                    </Grid>
                </div>
            </div>
              <div className="register-subject">

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <MenuBookIcon />
                    </Grid>
                    <Grid item>
                        <TextField error={SubError ? true:false} helperText={ SubError?"please enter subject name":null} value={Subject} type="text" id="register-email" label="Subject" onChange={(e)=>handleSubjectChange(e)}/>
                    </Grid>
                    </Grid>
                </div>
            </div>


            <div className="register-password">

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKeyIcon />
                    </Grid>
                    <Grid item>
                        <TextField helperText={register.PassError ? register.error_text.passError:""} value={register.password} error={register.PassError? true:false} id="register-password" type="password" label="Password" onChange={(e)=>handlePasswordChange(e)} />
                    </Grid>
                    </Grid>

                </div>
            <div className="reEnter-password">

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKeyIcon />
                    </Grid>
                    <Grid item>
                        <TextField helperText={register.password !== register.confirm_password && register.confirm_password ? register.error_text.passError:""} value={register.confirm_password} error={ ( register.email && register.password) &&  register.PasswordMatchFailed? true:false} id="reEnter-password" type="password" label="Confirm Password" onChange={(e)=>handleConfirmPasswordChange(e)} />
                    </Grid>
                    </Grid>

                </div>

            </div>
        </div>
    </div>

</div>

        
        <button id="register-btn" className="register-button" onClick={(e)=>HandleRegister(e)} type="submit">Submit</button>
        
         
                {/*<h5 id="existing-user">Existing User ?</h5>*/}

 
                <div id="existing-user">
                <h5>Existing User ?  </h5>
                    <NavLink activeClassName="active" className="link" to='/teacher-login' exact>
                        <h4 id="signIn-to-account">Sign In</h4>
                    </NavLink>
                </div>
            
            
            </div>
           

    
        </div>
    )
}

export default TeacherRegistration
