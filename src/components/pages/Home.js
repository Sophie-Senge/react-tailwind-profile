import React from "react";
import ProjectsGallery from "../ProjectGallery/ProjectsGallery";
import Header from "../Header";
import Button from "../Button";
// import "./Home.css";
// import background from "../../img/IMG_6282.jpg"

function Home() {
  const buttonStuff = {className: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white py-2 px-4 rounded",
content: "Home Button"}
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center bg-fixed">
      <Header/>
      <Button props={buttonStuff}/>
      <ProjectsGallery/>
    </div>
    // <div style={{backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>


    // </div>
   
   
  );
}

export default Home;
