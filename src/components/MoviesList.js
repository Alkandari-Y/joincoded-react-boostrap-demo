import React from 'react'
import moviesData from "../data/movieStore";
import MovieItem from "./MovieItem"
import { observer } from "mobx-react"

const MoviesList = () => {

    const moviesList = moviesData.movies.map((movie) => (<MovieItem movie={movie} key={movie.id}/>));


    return (
        <section className="container">
            <div className="row d-inline-flex">
                <div className="col-4" >
                    {moviesList}
                </div> 
            </div>
        </section>
    );
};
  

      
      

export default observer(MoviesList)
