import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/index.js";


export const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const onLogin = () => {

        login('Matias Casco');
        const lastPath = localStorage.getItem('lastPath') || '/';
        console.log('Login');
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
}