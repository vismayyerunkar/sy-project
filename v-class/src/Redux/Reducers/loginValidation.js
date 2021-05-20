const initialCred = {email:'',password:'',Login:false,PassError:false,EmailError:false,error_text:{emailError:"",passError:""} }


const loginValidation =(state=initialCred ,action)=>{

console.log("action type from ...reducer "+action.type)

    switch (action.type) {

        
        case 'EMAIL_REQUIRED' :
        console.log('email required')

            return{
                ...state,
                email:action.email,
                password:action.password,
                 error_text:{
                    passError:action.PassErrorText,
                    emailError:action.EmailErrorText
                    },
                EmailError:action.EmailError,
            } 
            break;


        case 'EMAIL_INVALID' :
        console.log('email invalid')

 
            return{
                ...state,
                email:action.email,
                password:action.password,
                error_text:{
                    passError:action.PassErrorText,
                    emailError:action.EmailErrorText ,
                    },
                EmailError:action.EmailError,
            }  
            break;

        case 'PASSWORD_REQUIRED' :
        console.log('password required')

 
            return{
                ...state,
                email:action.email,
                password:action.password,
                error_text:{
                    passError:action.PassErrorText,
                    emailError:action.EmailErrorText  
                },
                PassError:action.PassError,
                EmailError:action.EmailError,

            }  
            break;


        case 'PASSWORD_INVALID':
        console.log('password invalid')

            return{
                ...state,
                email:action.email,
                password:action.password,
                error_text:{
                    passError:action.PassErrorText,
                    emailError:action.EmailErrorText,
                },
                EmailError:action.EmailError,
                PassError:action.PassError,

            }  
            break;

        case 'PASSWORD_VALID':
        console.log('password invalid')

            return{
                ...state,
                email:action.email,
                password:action.password,
                error_text:{
                    passError:action.PassErrorText,
                    emailError:action.EmailErrorText,
                },
                EmailError:action.EmailError,
                PassError:action.PassError,

            }  
            break;

        case 'SUBMIT_INACTIVE':
        console.log('password invalid')

            return{
                ...state,
                email:action.email,
                password:action.password,
                error_text:{
                    passError:action.PassErrorText,
                    emailError:action.EmailErrorText,
                },
                EmailError:action.EmailError,
                PassError:action.PassError,

            }  
            break;


        case 'LOGIN' :

            console.log("login")

            return {
                ...state,
                email:action.email,
                password:action.password,
                error_text:{
                    passError:action.PassErrorText,
                    emailError:action.EmailErrorText
                },
                PassError:action.PassError,
                EmailError:action.EmailError,
                Login:action.Login,

            }
            break;
        
               

            default:
                return state;
                break;
    }


}




export default loginValidation;









