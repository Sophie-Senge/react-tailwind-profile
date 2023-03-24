import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import navLinks from './linksdata';
import {Link} from 'react-router-dom';



function SmallNav() {
  const [nav, setNav] = useState(false);

  return( 
    <div>
        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer pr-4  z-10 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 font-accent text-indigo-500">
            {navLinks.map(({ id, name, section }) => (
              <li key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"> <Link to={section}>{name}</Link>

              </li>
            ))}
          </ul>
        )}
    </div>
  )

}

export default SmallNav;