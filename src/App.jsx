
import "./App.css";
import { useState } from "react";
import {CV} from "./cv/Cv" //es la forma diferente de exportción (mirar primera fila del array de cv)
const { hero, education, experience, languages, habilities, volunteer } = CV;
import Hero from "./components/Hero/Hero"
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience"
import Languages from "./components/Languages/Languages";


function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <Education education={education}/>
      <Experience experience={experience}/>
      <Languages languages={languages}/>
      
    </div>
  );
}

export default App;
