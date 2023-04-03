import React, {useEffect} from "react";
import projects from "./projectData"
import Button from "../Button";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css"; 

function ProjectsGallery() {
  useEffect(() =>{
    Aos.init({duration: 2000});
    Aos.refresh();
  }, []);
  const buttonStuff = {
    className: "text-indigo-600 py-2 px-4 rounded mt-3 hover:text-indigo-400 hover:scale-105 duration-200",
    content: <FaGithub size={25} />
  }
  const buttonStuff2 = {
    className: "text-indigo-600 py-2 px-4 rounded mt-3 hover:text-indigo-400 hover:scale-105 duration-200",
    content: <FiExternalLink size={25} />
  }
  return (

    <div id="projects" name="projects" className="w-full min-h-screen bg-neutral-900 ">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full ">


        <h2 data-aos="fade-up" className="text-2xl font-accent text-zinc-400 mt-20">.Some things I've built</h2>
        <hr data-aos="fade-up" className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-yellow-600"></hr>

        {
          projects.map((project, i) => {
          
            return (
              <div key={i}>
                <div className="container flex flex-row flex-wrap my-3 p-2">
                  <div className="flex-auto w-64 mr-10">
                    <h5 data-aos="flip-up" className="text-2xl font-accent capitalize text-yellow-500">{project.name}</h5>
                    <p data-aos="flip-up" className="py-4 text-zinc-500">{project.description}</p>
                    <ul data-aos="flip-up" className="text-zinc-500 font-accent">
                      {project.tools[0] ? <li className="flex flex-wrap md:inline p-4">{project.tools[0]}</li> : ""}
                      {project.tools[1] ? <li className="flex flex-wrap md:inline p-4">{project.tools[1]}</li> : ""}
                      {project.tools[2] ? <li className="flex flex-wrap md:inline p-4">{project.tools[2]}</li> : ""}
                      {project.tools[3] ? <li className="flex flex-wrap md:inline p-4">{project.tools[3]}</li> : ""}
                      {project.tools[4] ? <li className="flex flex-wrap md:inline p-4">{project.tools[4]}</li> : ""}

                      
                    </ul>
                    <a data-aos="flip-up" href={project.githubLink}><Button props={buttonStuff} /></a>
                    <a data-aos="flip-up" href={project.deployedLink}><Button  props={buttonStuff2} /> </a>
                  </div>
                  <div className="flex-auto w-32">
                    <a data-aos="fade-up" href={project.deployedLink}> <img className={project.className} src={project.image} alt={project.name} /> </a>

                  </div>

                </div>



              </div>
            )
          })
        }

      </div>
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