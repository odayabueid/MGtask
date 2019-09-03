import React from 'react';
import logo from './logo.svg';
import News from "./components/News.js"
import Info from "./components/Info.js"

import { BrowserRouter , Router } from "react-router-dom";
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <div id="header1">
        {/* <span style={{marginRight:"80%"}}>Home</span>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszD_oyaSK8iPn0le-UhLU7U9A8HQ8OFd_D1UWbyadMdIcrfIWpw" alt="Smiley face" height="80" width="80"></img> */}
     <header>
      <ul>
          <li className="active">
          <a href="/">Home</a>
          </li>
      </ul>
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszD_oyaSK8iPn0le-UhLU7U9A8HQ8OFd_D1UWbyadMdIcrfIWpw" alt="Smiley face" height="80" width="80"></img> */}

     </header>

      </div>
      <BrowserRouter>
      <div>
     
          <div >
            <Route exact path="/" component={News} />
          </div>
          <div>
            <Route exact path="/info" component={Info} />
          </div>
          </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
