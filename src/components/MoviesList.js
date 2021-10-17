import React from 'react'
import moviesData from "../data/movieStore";
import MovieItem from "./MovieItem"
import { observer } from "mobx-react"

const MoviesList = () => {

    const moviesList = moviesData.movies.map((movie) => (<MovieItem movie={movie} key={movie.id}/>));
    


    return (
        <section className="">
            <div className="container">
                <div className="row" >
                    {moviesList}
                </div> 
            </div>
        </section>
    );
};
  

      
      

export default observer(MoviesList)
