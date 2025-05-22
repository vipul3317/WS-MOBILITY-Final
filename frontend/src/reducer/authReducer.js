export const authReducer =(state, action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true
            };

        case "LOGOUT":
            return {
                name :"",
                number:"",
                email:"",
                password:"",
                confirmpassword:"",
                isAuthenticated:false
            };
        
        default:
            return state;
    }
};