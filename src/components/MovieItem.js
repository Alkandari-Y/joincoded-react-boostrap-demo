import React from 'react'

const MovieItem = (props) => {
    const {id, title, poster, overview} = props.movie
    return (
    <div class="card m-4 p-4" style={{width: `18rem`}} id={id}>
        <img src={poster} class="card-img-top" alt={title}/>
        <div class="card-body">
            <p class="card-text">{overview.slice(0,50)}...</p>
        </div>
    </div>
    )
}

export default MovieItem
