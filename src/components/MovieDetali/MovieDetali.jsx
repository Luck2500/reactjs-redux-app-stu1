import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieApi from '../../api/MovieApi';
import { APIKey } from '../../api/MovieApiKey';
import './MovieDetali.scss'

function MovieDetali() {

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        const fatchDetail = async () =>{
            const res = await MovieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`)
            .catch((error)=>{
                console.error("Error",error)
            })
            setMovie(res.data)
            setLoading(true)
        }
        fatchDetail();
    }, []);

  return (
    <div>{loading ?(
        <div className='movie-detali-col'>
            <div className="movie-detali-img">
            <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-detali-info">
                <h3>{movie.Title}</h3>
                <p style={{margin:"2rem 0"}}>{movie.Plot}</p>
                <div>
                    <strong>Released : {movie.Released}</strong>
                </div>
            </div>
        </div>
    ) : (
        <h4 style={{margin:"1rem 0"}}>Loading.....</h4>
    )}
    </div>
  )
}

export default MovieDetali