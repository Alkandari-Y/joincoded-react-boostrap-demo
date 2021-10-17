import React from 'react'
import { useParams } from 'react-router'
//Mobx + Data
import moviesData from '../data/movieStore';
import { observer } from 'mobx-react';


const MovieDetail = () => {

    const {movieId} = useParams();
    const movie = moviesData.movies.find((movie) => movie.id === movieId)

    return (
        <center>
        <div class="card m-3 p-3 col-lg-6 col-sm-12" >
            <img src={movie.poster} class="card-img-top" alt={movie.title}/>
            <div class="card-body">
                <p class="card-text">{movie.overview}</p>
            </div>
        </div>
    </center>
    )
}

export default observer(MovieDetail)
