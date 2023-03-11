import React from "react";
import ProjectsGallery from "../ProjectGallery/ProjectsGallery";
import Header from "../Header";
import Skills from "../Skills/Skills";



function Home() {
 
  return (
    <div name="home" className="">

    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed">
      <Header/>
     
      <ProjectsGallery/>
      <Skills/>
    </div>
  
    
    </div>
   
  );
}

export default Home;
