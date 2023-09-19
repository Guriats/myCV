import "./App.css";
import { useState } from "react";

import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience"
import More from "./components/More/More";

import {CV} from "./cv/Cv" //es la forma diferente de exportción (mirar primera fila del array de cv)
const { hero, education, experience, languages, habilities, volunteer } = CV;



function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <About/>
      <Education education={education}/>
      <Experience experience={experience}/>
  
      
    </div>
  );
}

export default App;
