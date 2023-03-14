import React from "react";


function About() {
  return (
    <div name="about" className="w-full h-screen bg-neutral-900">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
      <h1 className="text-2xl font-accent text-zinc-400">.About Me</h1>
      <hr class="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-yellow-600"></hr>
      <p className="mt-20 outline outline-offset-8 py-20 px-4 text-yellow-500 tracking-wide">
      I'm a front end web developer and life-long learner with a background in philosophy, film, photography and art. I have traveled and lived all over the world from rural himalayan villages to dense bustling cites like New York and Beijing. My diverse background has strengthened my creative and innovative problem-solving abilites which has blossemed into a passion for developing clean, beautiful code. 
      </p>
        </div>
    </div>
  );
}

export default About;
