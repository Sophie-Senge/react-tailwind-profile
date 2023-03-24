import React from "react";


function About() {
  return (
    <div id="about" name="about" className="w-full h-screen bg-neutral-900">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
      <h1 className="text-2xl font-accent mt-28 text-zinc-400">.About Me</h1>
      <hr class="w-80 h-px my-8 mb-28 bg-gray-200 border-0 dark:bg-yellow-600"></hr>
      
      
      <div className="md:m-10 bg-zinc-400 md:outline outline-none outline-offset-8 text-zinc-400">

  
      <div className="md:m-12 bg-neutral-900 outline outline-2 outline-offset-[18px] text-yellow-600 rounded-tl-extraLarge rounded-br-extraLarge">
 

      
      <p className="md:mt-20 text-lg py-20 text-zinc-400 tracking-wide mx-10 md:mx-40">
      I'm a front end web developer and life-long learner with a background in philosophy, film, photography and art. I have traveled and lived all over the world from rural himalayan villages to dense bustling cites like London, New York and Beijing. My diverse background has strengthened my creative and innovative problem-solving abilites which has blossemed into a passion for developing clean, user-friendly, functional code with a focus on UI and UX. 
      </p>
     
      </div>
      </div>
     
      </div>
        </div>
    </div>
  );
}

export default About;
