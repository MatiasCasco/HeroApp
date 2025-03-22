import {useContext} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../auth';

export const Navbar = () => {

   const { user, logout } = useContext(AuthContext);
   /*console.log(user.name);*/
   const navigate = useNavigate();

    const onLogOut = () => {
        console.log('Logout');
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar bg-dark text-white p-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Logo */}
                    <Link className="navbar-brand text-white " to="/">
                        Asociaciones
                    </Link>

                    {/* Enlaces */}
                    <div className="d-flex flex-wrap gap-3 ms-3">
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`} to="/marvel">
                            Marvel
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`} to="/dc">
                            DC
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`} to="/search">
                            Search
                        </NavLink>
                    </div>


                {/* Usuario y Logout */}
                <div className="d-flex align-items-center flex-wrap">
                    <span className="me-3 text-info">{user?.name}</span>
                    <button className="btn btn-outline-light" onClick={onLogOut}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );

}