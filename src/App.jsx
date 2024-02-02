import './App.css'
import React, {useState} from "react";
import { extractNames, detectImage } from './utils/tesseract';

function App() {

  const [rosterLastNames, setRosterLastNames] = useState([]);

  const rosterImageUpload = async(e) =>{
    const rosterListImage = e.target.files[0]
    console.log(rosterListImage)
  
  if(rosterListImage){
    try{
      const detectedNames = await detectImage(rosterListImage);
      console.log("Detected Names:", detectedNames);
      const lastNames = extractNames(detectedNames)

      setRosterLastNames(lastNames);

    } catch (error) {
      console.log("error:", error)
    }
  }
  }

  return (
    <div>
            <h1>Attendance Checker</h1>
            <label> Upload your attendance list </label>
            <input type="file" id="rosterImageUpload" onChange={rosterImageUpload} />

    </div>
  )
}

export default App
