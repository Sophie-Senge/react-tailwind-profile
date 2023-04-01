import React from "react";
import AboutData from "./AboutData";



function About() {
  return (
    <div id="about" name="about" className="w-full h-screen bg-neutral-900">
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
      <h1 className="text-2xl font-accent mt-28 text-zinc-400">.About Me</h1>
      
      <hr className="w-80 h-px my-8 mb-28 bg-gray-200 border-0 dark:bg-yellow-600"></hr>

      <div className="md:m-10 md:bg-zinc-400 md:outline outline-none md:outline-offset-8 text-zinc-400">

  
      <div className="md:p-6 md:m-12 bg-neutral-900 md:outline outline-2 outline-offset-[18px] text-yellow-600 rounded-tl-extraLarge rounded-br-extraLarge">
 

      
      <AboutData/>
     
      </div>
      </div>
     
      </div>
        </div>
    </div>
  );
}

export default About;
