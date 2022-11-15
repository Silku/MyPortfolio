import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './src/pages/Home'
import AboutMe from './src/pages/AboutMe'
import Skills from './src/pages/Skills'
import Portfolio from './src/pages/Portfolio'
import TopNavbar from './src/components/TopNavbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router >
    <TopNavbar/>
    <Routes>
      <Route exact path ="/" element = {<Home/>}/>
      <Route path ="/AboutMe" element = {<AboutMe/>}/>
      <Route path ="/Skills" element = {<Skills/>}/>
      <Route path ="/Portfolio" element = {<Portfolio/>}/>
    </Routes>
  </Router>
);
