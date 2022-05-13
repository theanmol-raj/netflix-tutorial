import React, { useEffect, useState } from 'react'
import answer from '../Assets/axios';

function Row({title , fetchUrl , isLargeRow=false}) {
    const [movies ,SetMovies] = useState([]);
    const base =`https://image.tmdb.org/t/p/original`


    useEffect(()=>{
        async function Data(){
            const res = await answer.get(fetchUrl);
            SetMovies(res.data.results);
            return res;
        }
        Data();
    },[fetchUrl]);
  return (
    <div>
    <p>{title}</p>
    <div className=' flex space-x-4'>
        {movies?.map( (movie,y)=> ((isLargeRow && movie?.poster_path) || (!isLargeRow && movie?.backdrop_path)) 
            && (<img key={y}
            className=' h-96 w-64 ' href={`${base}${ isLargeRow ? movie?.poster_path :  movie?.backdrop_path }`}  />)
        )}

    </div>
    </div>
  )
}

export default Row