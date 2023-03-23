import React from "react";


function About() {
  return (
    <div id="about" name="about" className="w-full h-screen bg-neutral-900">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
      <h1 className="text-2xl font-accent text-zinc-400">.About Me</h1>
      <hr class="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-yellow-600"></hr>
      <div className="outline outline-1 outline-offset-8 text-yellow-600">
      <p className="mt-20 text-lg  py-20 px-4 text-zinc-400 tracking-wide">
      I'm a front end web developer and life-long learner with a background in philosophy, film, photography and art. I have traveled and lived all over the world from rural himalayan villages to dense bustling cites like London, New York and Beijing. My diverse background has strengthened my creative and innovative problem-solving abilites which has blossemed into a passion for developing clean, user-friendly, functional code and designs. 
      </p>
      </div>
     
      </div>
        </div>
    </div>
  );
}

export default About;
