const initialState = {email:'',subject:'',is_student:'',Login:false}


export const loginSuccess = (state=initialState,action)=>{

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                email:action.email,
                subject:action.subject,
                is_student:action.is_student,
                Login:true
            }            
            break;
    
        default:
               return state
            break;
    }
}