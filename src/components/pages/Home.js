import React from "react";
import ProjectsGallery from "../ProjectGallery/ProjectsGallery";
import Header from "../Jumbotron/Header";
import Skills from "../Skills/Skills";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";




function Home() {
 
  return (
    <div id="home" name="home" className="bg-hero-pattern bg-no-repeat md:bg-cover bg-contain bg-center bg-fixed">

    <div className="">
      <Header/>
      <About/>
      <ProjectsGallery/>
      <Skills/>
      <Contact/>
      <Footer/>
     
    </div>
  
    
    </div>
   
  );
}

export default Home;
