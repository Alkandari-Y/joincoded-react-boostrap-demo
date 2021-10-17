import './App.css';
import React from "react";
//Components
import Navbar from "./components/Navbar"
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
