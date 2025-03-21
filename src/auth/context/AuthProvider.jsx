import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";
import {types} from "../types/types.js";


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return user ? { logged: true, user } : { logged: false };
}

export const AuthProvider = ({ children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = ( name = '' ) => {

        const user = { id: 'ABC', name: name }

        const action = {
            type: types.login,
            payload: user,
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');

        const action = { type: types.logout}

        dispatch(action);
    }

    return(
      <AuthContext.Provider value={{
          ...authState,
          authState,
          login: login,
          logout: logout,
      }}>
          { children }
      </AuthContext.Provider>
    );
}