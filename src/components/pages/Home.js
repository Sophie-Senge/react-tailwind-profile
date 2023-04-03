import React from "react";
import ProjectsGallery from "../ProjectGallery/ProjectsGallery";
import Header from "../Jumbotron/Header";
import Skills from "../Skills/Skills";
import About from "../about/About";
import Contact from "../Contact";





function Home() {
 
  return (
    <div id="home" name="home" className="bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed">

    <div className="">
      <Header/>
      <About/>
      <ProjectsGallery/>
      <Skills/>
      <Contact/>
      
     
    </div>
  
    
    </div>
   
  );
}

export default Home;
