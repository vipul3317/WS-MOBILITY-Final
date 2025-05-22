import { authReducer } from "../reducer/authReducer";
const { createContext, useContext, useReducer } = require("react")

const initialValue = {
    name: "",
    number: "",
    email: "",
    password: "",
    confirmpassword: "",
    isAuthenticated: false
}

const AuthContext = createContext(initialValue);
const AuthProvider = ({ children }) => {
    const [state, authDispatch] = useReducer(authReducer, initialValue);

    const login=(userDetails)=>{
        authDispatch({
            type:"LOGIN",
            payload:userDetails
        });
    };

    const logout=()=>{
        authDispatch({
            type:"LOGOUT"
        });
    };

    return (
        <AuthContext.Provider
            value={{...state, login, logout, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };