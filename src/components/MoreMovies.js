import React from 'react'
import moviesData from '../data/movieStore';
import MovieItem from "./MovieItem"
import { observer } from "mobx-react"

const MoreMovies = () => {

    const shortList = moviesData.movies.slice(0, 10)
    const moviesList = shortList.map((movie) => (<MovieItem movie={movie} key={movie.id}/>));


    return (
        <section className="container more-movies">
            <div >
                <div  className="more-moies-items">
                    {moviesList}
                </div> 
            </div>
        </section>
    );
};

export default observer(MoreMovies)
