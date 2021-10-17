import React from 'react';
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import moviesData from '../data/movieStore';
import {Dropdown} from 'react-bootstrap';
const Navbar = () => {

  const movies = moviesData.movies
  let genresList = [];

  movies.forEach(movie => movie.genres.forEach((genre) =>{
    if (!genresList.includes(genre)){
      genresList.push(genre)
    }
  }))

  const genresDropdown = genresList.map(genre => (
    <Dropdown.Item><Link to="/">{genre}</Link></Dropdown.Item>
  ))

  console.log(genresList)
  return (
      <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link class="navbar-brand text-white" to="/">MOVIESC>PE</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <Link class="nav-link active text-white" aria-current="page" to="/movies">Movies</Link>
            </li>
            <li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {genresDropdown}
              </Dropdown.Menu>
            </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
  )
}

export default observer(Navbar)
