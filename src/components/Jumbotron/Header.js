import React from "react";
import Button from "../Button";
import SocialTab from "./SocialTab";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

function Header() {
  const buttonStuff = {
    className: "shadow-lg shadow-indigo-500/20 text-indigo-600 border border-indigo-600 py-2 px-4 rounded ml-4 mt-3 font-accent  hover:text-indigo-400 hover:scale-105 duration-200",
    content: "Projects"
  }

  return (
    
    <div className="header max-h-screen h-screen flex flex-col items-start justify-end p-6">
      
       <SocialTab/>
     
       
      <div className=" bg-gradient-to-tr from-zinc-900 to-transparent py-3">
      <TypeAnimation
      sequence={[
        '{navLinks.map(({ id, name, section }) => (',
        1000,
        'onClick={() => setNav(!nav)}',
        1000,
        'Hi, my name is',// Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={0}
      style={{ display: 'inline-block' }}
      className="text-4xl text-indigo-700 font-accent drop-shadow-2xl px-4"
    />
        {/* <h2 className="font-accent text-indigo-700 text-2xl drop-shadow-2xl px-4">Hi, my name is</h2> */}
     
        <h1 className="text-6xl text-amber-400 font-bold drop-shadow-2xl tracking-wider p-4">Sophie Perks.</h1>
        <h2 className="pb-4 px-4 font-bold text-amber-200 text-4xl tracking-wider drop-shadow-2xl">
          I'm a Front End Web Developer.
        </h2>
        <Link to="projects" spy={true} smooth={true} offset={-10} duration={500}> <Button props={buttonStuff} /></Link>

      </div>
     
    </div>
    
  );
}

export default Header;
