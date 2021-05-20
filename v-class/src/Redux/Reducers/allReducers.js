import SidebarToggler from './SidebarToggler.js'
import {combineReducers} from 'redux';
import loginValidation from './loginValidation.js'
import {hideform} from './hideLoginform.js'
import registerValidation from './registerValidation.js'
import {loginSuccess} from './loginSuccess'


const allReducers = combineReducers({
    is_open: SidebarToggler,
    login:loginValidation,
    hideform:hideform,
    register:registerValidation,
    loginSuccess:loginSuccess,

})

export default allReducers;


