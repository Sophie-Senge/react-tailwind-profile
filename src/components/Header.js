import React from "react";
import Button from "./Button";

function Header() {
  const buttonStuff = {className: "drop-shadow-2xl bg-gradient-to-r from-yellow-300 to-transparent-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded",
  content: "Projects"}
  return (
    <div className="header max-h-screen h-screen flex flex-col mx-auto items-center justify-center px-4">
      <h1 className="text-6xl text-amber-400 font-headings drop-shadow-2xl">Hello, I'm Sophie Perks</h1>
      <p className="py-4 text-white">
        I'm a Junior Front End Web Developer
      </p>
      <Button props={buttonStuff}/>
    </div>
  );
}

export default Header;
