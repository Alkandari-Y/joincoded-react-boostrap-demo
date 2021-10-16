import './App.css';
import React from "react";
import { Route, Switch } from "react-router";
//Components
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import MoviesList from "./components/MoviesList";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
