import React from "react";
import projects from "./projectData"
import Button from "../Button";

function ProjectsGallery() {
  return (
    
    <div className="shadow-xl bg-neutral-900">
      <h2>Some things I've built</h2>
      {
        projects.map((project, i) => {
          // const buttonStuff = {className: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded",
          // content: "Live Link"}
          const buttonStuff2 = {className: "shadow-lg shadow-indigo-500/20 text-indigo-600 border border-indigo-600 py-2 px-4 rounded mt-3 font-accent  hover:text-indigo-400 hover:scale-105 duration-200",
          content: "Github Repo"}
          return (
            <div key={i}>
              <div className="container flex flex-row my-3 p-5">
                <div className="flex-auto w-64 mr-10">
                   <h5 className="text-2xl font-accent capitalize text-indigo-700">{project.name}</h5>
                    <p className="py-4 text-amber-100">{project.description}</p>
                  
                    <a href={project.githubLink}><Button props={buttonStuff2}/></a>
                </div>
                <div className="flex-auto w-32">
                <a href={project.deployedLink}> <img className="h-22 w-22 transition duration-500 hover:scale-110 shadow-lg shadow-indigo-500/30 rounded cursor-pointer p-4 border border-indigo-500 hover:border-indigo-300" src={project.image} alt={project.name} /> </a>
                    
                  </div>

              </div>



            </div>
          )
        })
      }


    </div>
  )

}

export default ProjectsGallery;

/*
import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span className="remove" onClick={()=>props.removeFriend(props.id)}>𝘅</span>
    </div>
  );
}

export default FriendCard;

*/