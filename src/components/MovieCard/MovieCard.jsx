import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.scss'
function MovieCard({movie}) {
  return (
    <div className='card'>
        <div className="card-image">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="card-content">
            <span className="card-title">{movie.Title}</span>
            <p>Year: {movie.Year}</p>
        </div>
        <div className="card-action">
            <Link to={`movie/${movie.imdbID}`}>Read More</Link>
        </div>
    </div>
  )
}

export default MovieCard