import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import navLinks from './linksdata';
// import {Link} from 'react-scroll';
import { HashLink } from 'react-router-hash-link';


function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)
  const signature = "*SP";

  
  return (
  
    <nav className='fixed top-0 z-10 w-full h-20 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30'>
     <div className='flex justify-between items-center px-4 text-white'>
      
     
     
      <div>
    <HashLink smooth to='/#'> <h1 className=' cursor-pointer text-5xl font-road ml-2 text-yellow-300 hover:text-yellow-500 py-4'>{signature}</h1></HashLink>
      </div>

      <ul className='hidden md:flex'>
        {navLinks.map(({ id, name, section }) => (
         
          <HashLink to={section} spy={true} smooth={true} offset={-10} duration={500} key={id} className='px-4 cursor-pointer text-md font-accent capitalize text-indigo-700 hover:text-indigo-500 hover:scale-110 duration-200'>
            {name}
          </HashLink>
          

        ))}
        {/* <NavLink to='resume'><li className='px-4 cursor-pointer text-md font-accent capitalize text-indigo-700 hover:text-indigo-500 hover:scale-110 duration-200'>.Resume</li></NavLink> */}
      </ul>

      <div
        onClick={handleClick}
        className='cursor-pointer pr-4 text-yellow-500 z-10 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-neutral-900 font-accent text-indigo-500">
          {navLinks.map(({ id, name, section }) => (
            <li key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"> <HashLink onClick={handleClick} to={section} spy={true} smooth={true} offset={-10} duration={500}> {name}
              </HashLink>
             
            </li> 
          ))}
           <NavLink onClick={handleClick} to='/resume'><li className='px-4 py-6 text-4xl cursor-pointer text-md font-accent capitalize text-indigo-500'>.Resume</li></NavLink>
        </ul>
      )}
</div>
    </nav>

  );
}

export default NavBar;
