import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Path, Routes } from "react-router-dom";

import NavBarComp from "./Components/NavBarComp/NavBarComp";
import Home from "./Components/NavBarComp/Home";
import Technology from "./Components/NavBarComp/Technology";
import Business from "./Components/NavBarComp/Business";
import Health from "./Components/NavBarComp/Health";
import Science from "./Components/NavBarComp/Science";
import Entertainment from "./Components/NavBarComp/Entertainment";
import Sports from "./Components/NavBarComp/Sports";


import PageNotFound from "./Components/PageNotFound/PageNotFoud";

import About from "./Components/Footer/About";
import ContactUs from "./Components/Footer/Contactus";
import Footer from "./Components/Footer/Footer";
function App(props) {
  return (
    <div>
      <Router>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/business" element={<Business />} />
          <Route path="/science" element={<Science />} />
          <Route path="/health" element={<Health />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
