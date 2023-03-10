import React from "react";
import projects from "./projectData"
import Button from "../Button";
function ProjectsGallery() {
  return (
    <div>
      {
        projects.map((project, i) => {
          const buttonStuff = {className: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded",
          content: "Live Link"}
          const buttonStuff2 = {className: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded",
          content: "Github Repo"}
          return (
            <div key={i}>
              <div className="container flex flex-row my-3 rounded-lg shadow-xl bg-blue-500 p-5">
                <div className="flex-auto w-64">
                   <h5 className="font-bold ">{project.name}</h5>
                    <p className="text-red-600">{project.description}</p>
                  
                    <a href={project.githubLink}><Button props={buttonStuff2}/></a>
                </div>
                <div className="flex-auto w-32">
                <a href={project.deployedLink}> <img className="h-30 w-30 transition duration-500 hover:scale-110 rounded" src={project.image} alt={project.name} /> </a>
                    
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
      <span className="remove" onClick={()=>props.removeFriend(props.id)}>????</span>
    </div>
  );
}

export default FriendCard;

*/