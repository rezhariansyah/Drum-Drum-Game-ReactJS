import React from 'react';
import { Route } from "react-router-dom";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import './App.css';
import Axios from "axios";


function App() {
  Axios.defaults.headers.common["authorization"] = "welcometoapp";
  return (
    <div>
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Home} exact />
    </div>
  );
}

export default App;
