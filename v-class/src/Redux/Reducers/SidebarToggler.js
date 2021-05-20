
const SidebarToggler = (state=false,action)=>{


switch (action.type) {

    case 'OPEN_SIDEBAR':
        console.log("opening sidebar..")
        return state=true;

    case 'CLOSE_SIDEBAR':
        console.log("closing sidebar..")

        return state=false;


    default:
        return state;
    
}
};




export default SidebarToggler;






