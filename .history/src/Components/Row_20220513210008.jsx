import React, { useEffect, useState } from 'react'
import answer from '../Assets/axios';
import requests from '../Assets/Request';

function Row({title , fetchUrl , isLargeRow=false}) {
    const [movie ,SetMovie] = useState([]);
    const base =`https://image.tmdb.org/t/p/original/`


    useEffect(()=>{
        async function Data(){
            const res = await answer.get(fetchUrl);
            SetMovie(res.data.results);
            return res;
        }
        Data();
    },[fetchUrl]);
  return (
    <div>
    <p>{title}</p>
    <div className=''>
        {movie?.map( item=> ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) 
            && (<img
            className='' href={`${base}${isLargeRow ? movie.poster_path :  movie.backdrop_path }`} alt='' />)
        )}

    </div>
    </div>
  )
}

export default Row