import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./Components/NavBarComp/NavBarComp";
import Home from "./Components/Home";

import { BrowserRouter as Router, Route, Path, Routes } from "react-router-dom";
import Technology from "./Components/Technology";
import Business from "./Components/Business";
import Health from "./Components/Health";
import Science from "./Components/Science";
import Entertainment from "./Components/Entertainment";
import Sports from "./Components/Sports";

function App(props) {
  const [newsURL, setNewsURL]  = useState({});
  // setNewsURL( {
  //   url: "https://newsapi.org/v2/",
  //   source: "top-headlines?",
  //   category: "",
  //   country: "country=in",
  //   apiKey: "&apiKey=b0e90a8e8ae84f938024b373b63b29e2",
  // })
  const url = {
    url: "https://newsapi.org/v2/",
    source: "top-headlines?",
    category: "",
    country: "country=in",
    apiKey: "&apiKey=b0e90a8e8ae84f938024b373b63b29e2",
  };
  return (
    <div>
        
      <Router>
      <NavBarComp />
        <Routes>
          <Route path="/" element ={<Home url={url} />} />
          
          <Route path="/technology" element ={<Technology url={url} />} />
          <Route path="/business" element= {<Business/>} />
          <Route path="/science" element= {<Science/>} />
          <Route path="/health" element= {<Health/>} />
          <Route path="/entertainment" element= {<Entertainment/>} />
          <Route path="/sports" element ={<Sports url={url} />} />
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
