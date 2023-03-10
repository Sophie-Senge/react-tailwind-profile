import React from 'react';
import { NavLink } from 'react-router-dom';


function NavTabs() {
  return (
    <div className="bg-indigo-600 bg-opacity-50">

    
    <ul className="nav ">
      <li className="nav-item">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Skills
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/projectsgallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
     
    </ul>
    </div>
  );
}

export default NavTabs;
