import React from 'react'
import { Link } from "react-router-dom"

const MovieItem = (props) => {
    const {id, title, poster, overview} = props.movie
    return (
    <div class="card m-3 p-3 col-lg-6 col-sm-12" style={{width: `18rem`}} id={id}>
        <Link to={`/movies/${id}`}>
            <img src={poster} class="card-img-top" alt={title}/>
        </Link>
        <div class="card-body">
            <p class="card-text">{overview.slice(0,50)}...</p>
        </div>
    </div>
    )
}

export default MovieItem
