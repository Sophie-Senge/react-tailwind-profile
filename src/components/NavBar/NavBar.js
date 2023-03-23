import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import navLinks from './linksdata';
import {Link} from 'react-scroll';


function NavBar() {
  const [nav, setNav] = useState(false);
  const signature = "*SP";

  
  return (
  
    <nav className='fixed top-0 z-10 w-full h-20 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30'>
     <div className='flex justify-between items-center px-4 text-white'>
      
     
     
      <div>
        <h1 className=' text-5xl font-road ml-2 text-yellow-300 py-4'>{signature}</h1>
      </div>

      <ul className='hidden md:flex'>
        {navLinks.map(({ id, name, section }) => (
          <Link  to={section} spy={true} smooth={true} offset={-10} duration={500} key={id} className='px-4 cursor-pointer text-md font-accent capitalize text-indigo-700 hover:text-indigo-500 hover:scale-110 duration-200'>
            {name}
          </Link>


        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map(({ id, name }) => (
            <li key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {name}
            </li>
          ))}
        </ul>
      )}
</div>
    </nav>

  );
}

export default NavBar;
