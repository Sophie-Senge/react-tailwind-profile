import React from "react";
import ProjectsGallery from "../ProjectGallery/ProjectsGallery";
import Header from "../Header";
import Skills from "../Skills/Skills";



function Home() {
 
  return (
    <div name="home" className="bg-gradient-to-b from-black-700 to-white-500">

    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed mix-blend-overlay">
      <Header/>
     
      <ProjectsGallery/>
      <Skills/>
    </div>
  
    
    </div>
   
  );
}

export default Home;
