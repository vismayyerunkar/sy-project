const initialRegisterState = {  email:'',password:'', confirm_password:'',
                                Login:false,Register:false,PassError:false,PasswordMatchFailed:true,
                                EmailError:false,error_text:{emailError:"",passError:""}

                                 }


const registerValidation=(state = initialRegisterState,action)=>{

    switch (action.type) {

        case 'REGISTER_INACTIVE':

            return{
                ...state,
                email:action.email,
                password:action.password,
                confirm_password:action.confirm_password,
                Login:action.Login,
                Register:action.Register,
                PasswordMatchFailed:action.PasswordMatchFailed,
                PassError:action.PassError,
                EmailError:action.EmailError,
                error_text:{
                    emailError:action.EmailErrorText,
                    passError:action.PassErrorText
                }
        
            }
            break;
    
        case 'REGISTRATION_EMAIL_REQUIRED':

            return{
                ...state,
                email:action.email,
                password:action.password,
                confirm_password:action.confirm_password,
                Login:action.Login,
                Register:action.Register,
                PasswordMatchFailed:action.PasswordMatchFailed,
                PassError:action.PassError,
                EmailError:action.EmailError,
                error_text:{
                    emailError:action.EmailErrorText,
                    passError:action.PassErrorText
                }
            }
            break;

        case 'REGISTRATION_EMAIL_INVALID':

            return{
                ...state,
                email:action.email,
                password:action.password,
                confirm_password:action.confirm_password,
                Login:action.Login,
                Register:action.Register,
                PasswordMatchFailed:action.PasswordMatchFailed,
                PassError:action.PassError,
                EmailError:action.EmailError,
                error_text:{
                    emailError:action.EmailErrorText,
                    passError:action.PassErrorText
                }
            }
            break;
    
        case 'REGISTRATION_PASSWORD_REQUIRED':

            return{
                ...state,
                email:action.email,
                password:action.password,
                confirm_password:action.confirm_password,
                Login:action.Login,
                Register:action.Register,
                PasswordMatchFailed:action.PasswordMatchFailed,
                PassError:action.PassError,
                EmailError:action.EmailError,
                error_text:{
                    emailError:action.EmailErrorText,
                    passError:action.PassErrorText
                }
            }
            break;


            case 'REGISTRATION_PASSWORD_INVALID':

                return{
                    ...state,
                    email:action.email,
                    password:action.password,
                    confirm_password:action.confirm_password,
                    Login:action.Login,
                    Register:action.Register,
                    PasswordMatchFailed:action.PasswordMatchFailed,
                    PassError:action.PassError,
                    EmailError:action.EmailError,
                    error_text:{
                        emailError:action.EmailErrorText,
                        passError:action.PassErrorText
                    }
                }
                break;

            case 'REGISTRATION_PASSWORD_VALID':

                return{
                    ...state,
                    email:action.email,
                    password:action.password,
                    confirm_password:action.confirm_password,
                    Login:action.Login,
                    Register:action.Register,
                    PasswordMatchFailed:action.PasswordMatchFailed,
                    PassError:action.PassError,
                    EmailError:action.EmailError,
                    error_text:{
                        emailError:action.EmailErrorText,
                        passError:action.PassErrorText
                    }
                }
                break;

        
            case 'CONFIRM_PASSWORD':

                return{
                    ...state,
                    email:action.email,
                    password:action.password,
                    confirm_password:action.confirm_password,
                    Login:action.Login,
                    Register:action.Register,
                    PasswordMatchFailed:action.PasswordMatchFailed,
                    PassError:action.PassError,
                    EmailError:action.EmailError,
                    error_text:{
                        emailError:action.EmailErrorText,
                        passError:action.PassErrorText
                    }
                }
                break;    

            case 'REGISTER':

                return{
                    ...state,
                    email:action.email,
                    password:action.password,
                    confirm_password:action.confirm_password,
                    Login:action.Login,
                    Register:action.Register,
                    PasswordMatchFailed:action.PasswordMatchFailed,
                    PassError:action.PassError,
                    EmailError:action.EmailError,
                    error_text:{
                        emailError:action.EmailErrorText,
                        passError:action.PassErrorText
                    }
                }
                break;        

    
        default:
            return state;
            break;
    

    }


}



export default registerValidation
