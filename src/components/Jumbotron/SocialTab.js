import React from "react";
import socialdata from "./socialdata";

function SocialTab() {
  return (
    <div className="hidden md:flex felx-col top-[25%] right-2 fixed">
      <ul>
        {socialdata.map(({ id, url, icon }) => {
          return (
            <li key={id} className="text-2xl mb-10 rounded-2xl cursor-pointer bg-transparent shadow-slate-600 text-indigo-700 hover:text-indigo-500 hover:scale-125 duration-200">
             
              <a href={url}>{icon}</a>
           

            </li>
          );


        })}

      </ul>

    </div>


  )
}

export default SocialTab;