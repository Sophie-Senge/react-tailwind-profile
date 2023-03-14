import React from "react";
import skillsList from "./skillsData";

function Skills() {
  return (
    <div name="about" className="w-full h-screen bg-neutral-900">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
      <h1 className="text-2xl font-accent text-zinc-400">.Skills</h1>
      <hr class="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-yellow-600"></hr>
      <ul className="flex flex-wrap md:flex-nowrap">
        {skillsList.map(({id, skill, icon }) => {
          return(
            <li key={id} className="p-6 text-zinc-500 mt-8">
              {icon}
              <p className="pt-2">{skill}</p>
            </li>
          )
        })}
        <li>

        </li>
      </ul>
      </div>
        </div>
    </div>
  );
}

export default Skills;
