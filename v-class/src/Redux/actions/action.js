export const OpenSideBar=()=>{
    console.log("hit")
    return{
        type:'OPEN_SIDEBAR'
    }
}

export const CloseSidebar=()=>{
    return{
        type:'CLOSE_SIDEBAR'
    }
}

export const ToggleForm=(value)=>{

    //  if(value){
    //     return{
    //         type:'SHOW_MANUAL'
    //     }
    // }

    if(value){
        return{
            type:"SHOW"
        }
    }else{
        return{
            type:"HIDE"
        }
    }
   
    
}

export const ValidateLogin=(email,password)=>{

    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!email && !password){
            return {
                type:'SUBMIT_INACTIVE',
                EmailError:true,
                EmailErrorText:'Email address is required',
                PassError:true,
                PassErrorText: 'Password is required',
            }
        }

        if (!email) {

            return {
                    type:'EMAIL_REQUIRED',
                    email:email,
                    password:password,
                    EmailErrorText:'Email address is required',
                    EmailError:true,
                    } 

        }else if (!filter.test(email)) {

            return {
                    type:'EMAIL_INVALID',
                    email:email,
                    password:password,
                    EmailError:true,
                    EmailErrorText:'Email address is invalid',
                    } 
        }

        if (!password) {
            return {
                    type:'PASSWORD_REQUIRED',
                    PassErrorText: 'Password is required',
                    email:email,
                    password:password,
                    PassError:true,
                    } 


        }
        if(password.length < 8){
            return {
                    type:'PASSWORD_INVALID',
                    email:email,
                    password:password,
                    PassError:true,
                    // PassErrorText: 'Password must be 8 or more characters',
                    PassErrorText: 'Please Enter a Longer Password',
                    } 
            

        }else if(password.length>=8){
            return {
                type:'PASSWORD_VALID',
                email:email,
                password:password,
                PassError:false,
                EmailError:false,
            }
        

        }
        // if(email,password,submit == true){
        // return {

        //         type:'LOGIN',
        //         email:email,
        //         password:password,
        //         Login:true,
        //         EmailError:false,
        //         PassError:false

        //     }
        // }

        return {
            type:'NONE',
           
        };      

}

export const HandleSubmit=(email,password)=>{

    return {

            type:'LOGIN',
                email:email,
                password:password,
                EmailError:false,
                PassError:false

            }
        
}


export const ValidateRegister=(email,password,confirm_password)=>{


    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        
        if (!email) {

            return {
                    type:'REGISTRATION_EMAIL_REQUIRED',
                    email:email,
                    password:password,
                    confirm_password:confirm_password,
                    EmailErrorText:'Email address is required',
                    EmailError:true,
                    } 

        }else if (!filter.test(email)) {

            return {
                    type:'REGISTRATION_EMAIL_INVALID',
                    email:email,
                    password:password,
                    confirm_password:confirm_password,
                    EmailError:true,
                    EmailErrorText:'Email address is invalid',

                    } 
        }

        if (!password) {
            return {
                    type:'REGISTRATION_PASSWORD_REQUIRED',
                    PassErrorText: 'Password is required',
                    email:email,
                    password:password,
                    confirm_password:confirm_password,
                    PassError:true,

                    } 


        }
        if(password.length < 8){
            return {
                    type:'REGISTRATION_PASSWORD_INVALID',
                    email:email,
                    password:password,
                    confirm_password:confirm_password,
                    PassError:true,
                    PassErrorText: 'Please Enter a Longer Password',

                    } 
            

        }else if(password.length>=8){
            return {
                type:'REGISTRATION_PASSWORD_VALID',
                email:email,
                password:password,
                confirm_password:confirm_password,
                PassError:false,
                EmailError:false,

            }
        

        }      

        return {
            type:'NONE',
           
        };      

}

export const HandleRegisterSubmit=(email,password,confirm_password)=>{

    if(email,password,confirm_password){
        return {
                    type:'REGISTER',
                    email:email,
                    password:password,
                    confirm_password:confirm_password,
                    Register:true,
                    EmailError:false,
                    PassError:false,
                    PasswordMatchFailed:false,

                }
                
    }    
        
}
