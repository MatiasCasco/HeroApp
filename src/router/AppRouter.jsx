import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../auth";
import {HereoesRoutes} from "../heroes";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";


export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <HereoesRoutes/>
                    </PrivateRoute>
                }/>
                {/* <Route path="/*" element={<HereoesRoutes/>}/>*/}
                {/* <Route path="login" element={}/>*/}
            </Routes>
        </>
    );
}