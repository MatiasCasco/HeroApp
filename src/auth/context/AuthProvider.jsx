import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";


const initialState = {
    logged: false,
};

export const AuthProvider = ({ children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);

    return(
      <AuthContext.Provider value={{ }}>
          { children }
      </AuthContext.Provider>
    );
}