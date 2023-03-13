import React from "react";
import Button from "../Button";
import SocialTab from "./SocialTab";

function Header() {
  const buttonStuff = {
    className: "shadow-lg shadow-indigo-500/20 text-indigo-600 border border-indigo-600 py-2 px-4 rounded ml-4 mt-3 font-accent  hover:text-indigo-400 hover:scale-105 duration-200",
    content: "Projects"
  }

  return (
    
    <div className="header max-h-screen h-screen flex flex-col items-start justify-end p-6">
       <SocialTab/>
      <div className=" bg-gradient-to-tr from-zinc-900 to-transparent py-3">
        <h2 className="font-accent text-indigo-700 text-2xl drop-shadow-2xl px-4">Hi, my name is</h2>
        <h1 className="text-6xl text-amber-400 font-bold drop-shadow-2xl p-4 underline-offset-8">Sophie Perks.</h1>
        <h2 className="pb-2 px-4 text-amber-200 text-4xl drop-shadow-2xl">
          I'm a Front End Web Developer.
        </h2>
        <Button props={buttonStuff} />

      </div>
     
    </div>
    
  );
}

export default Header;
