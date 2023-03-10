import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Search from './components/Skills';
import ProjectsGallery from './components/ProjectGallery/ProjectsGallery';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router basename= "">
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes >
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Search />} />
          <Route path="/projectsgallery" element={<ProjectsGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/contact/*" element={<Contact />} />
          
        </Routes>
     
        
       

      </div>
      
    </Router>
    
  );
}

export default App;

