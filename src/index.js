import React from 'react';
import ReactDOM from 'react-dom';
import './components/custom.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Navigation,
  Home,
  Projects
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
