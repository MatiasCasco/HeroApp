import {AppRouter} from "./router/AppRouter.jsx";
import {AuthProvider} from "./auth";


export const HeroesApp = () => {
    return (
        <AuthProvider>
            <h1>Heroes App</h1>
            <AppRouter/>
        </AuthProvider>
    )
}