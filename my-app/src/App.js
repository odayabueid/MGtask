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
      <BrowserRouter>
          <div>
            <Route exact path="/" component={News} />
          </div>
          <div>
            <Route exact path="/info" component={Info} />
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
