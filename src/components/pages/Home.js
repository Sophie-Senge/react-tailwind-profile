import React from "react";
import ProjectsGallery from "../ProjectGallery/ProjectsGallery";
import Header from "../Jumbotron/Header";
import Skills from "../Skills/Skills";
import About from "../About";




function Home() {
 
  return (
    <div id="home" name="home" className="bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed">

    <div className="">
      <Header/>
      <About/>
      <ProjectsGallery/>
      <Skills/>
     
    </div>
  
    
    </div>
   
  );
}

export default Home;
