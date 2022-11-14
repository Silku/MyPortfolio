import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './src/pages/Home'
import Portfolio from './src/pages/Portfolio'
import Profile from './src/pages/Profile'
import SideNavbar from './src/components/SideNavbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router >
    <SideNavbar/>
    <Routes>
      <Route exact path ="/" element = {<Home/>}/>
      <Route path ="/Portfolio" element = {<Portfolio/>}/>
      <Route path ="/Profile" element = {<Profile/>}/>
    </Routes>
  </Router>
);
