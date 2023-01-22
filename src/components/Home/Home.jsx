import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MovieApi from '../../api/MovieApi';
import { APIKey } from '../../api/MovieApiKey';
import { addMovie } from '../../store/Reducer';
import MovieListing from '../MovieListing/MovieListing';
import "./Home.scss"

function Home() {

    const dispatch = useDispatch();
    const [search , setSearch] = useState("")
    console.log(search)

    useEffect(() => {
        const fatchMovies = async () =>{
            const searchKey = search ? search : "Thor"
            const res = await MovieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)

            setTimeout(()=>{
                dispatch(addMovie(res.data.Search))
            },500)
        }
        fatchMovies();
    }, [search]);

  return (
    <div>
        <h3 style={{margin:"1rem 0"}}>Movie</h3>
        <input type="text" placeholder="Search..." value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <MovieListing />
    </div>
  )
}

export default Home