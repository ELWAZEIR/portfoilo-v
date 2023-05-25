import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.css'
import Contact from "./routes/contact/Contact";
import Error from "./routes/error/Error";
import Home from "./routes/Home/Home";
import Project from "./routes/project/Project";
import Footer from "./components/footer/Footer";
function App() {
  return (
    < >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="footer" element={<Footer/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    
    </>
  );
}

export default App;
