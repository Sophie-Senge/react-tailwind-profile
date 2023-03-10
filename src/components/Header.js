import React from "react";
import Button from "./Button";

function Header() {
  const buttonStuff = {className: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded",
  content: "Projects"}
  return (
    <div className="header max-h-screen h-screen flex flex-col mx-auto items-center justify-center px-4">
      <h1 className="text-6xl text-blue-400 font-headings">Hello, I'm Sophie Perks</h1>
      <p className="py-4">
        I'm a Junior Front End Web Developer
      </p>
      <Button props={buttonStuff}/>
    </div>
  );
}

export default Header;
