export const hideform = (state={hiddenform:true,showmanual:false},action)=>{

console.log("show form reducer")

    switch (action.type) {

        case 'SHOW':
             return {
                ...state,
                hiddenform:true
            }
            break;
        case 'HIDE':
            return {
                ...state,
                hiddenform:false
            }
            break;
        case 'SHOW_MANUAL':
            return {...state,
                showmanual:!state.showmanual
                }
            break;
    
        default:
            return state
            break;
    }
}



