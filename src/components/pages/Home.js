import React from "react";
import ProjectsGallery from "../ProjectGallery/ProjectsGallery";
import Header from "../Header";
import Button from "../Button";


function Home() {
 
  return (
    <div name="home" className="bg-gradient-to-tr from-purple-400 to-black-900">

    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed mix-blend-overlay">
      <Header/>
     
      <ProjectsGallery/>
    </div>
    
    
    </div>
   
  );
}

export default Home;
