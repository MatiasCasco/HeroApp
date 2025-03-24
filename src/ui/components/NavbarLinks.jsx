import {NavLink} from "react-router-dom";


export const NavbarLinks = () => {

    return (
        <>
            <div className="d-flex flex-wrap gap-3 ms-3 d-lg-none">
               <div className="dropdown">
                   <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                   >
                       Pages
                   </button>
                   <ul className="dropdown-menu">
                       <li>
                           <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`} to="/marvel">
                               Marvel
                           </NavLink>
                       </li>
                       <li>
                           <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`} to="/dc">
                               DC
                           </NavLink>
                       </li>
                       <li>
                           <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`} to="/search">
                               Search
                           </NavLink>
                       </li>
                   </ul>
               </div>
            </div>
            <div className="d-none d-lg-flex flex-wrap gap-3 ms-3">
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
        </>
    );

}