import React, { useEffect, useState } from 'react'
import answer from '../Assets/axios';
import requests from '../Assets/Request';

function Banner() {
    const [movie ,SetMovie] = useState([]);
    useEffect(()=>{
        async function Data(){
            const res = await answer.get(requests.fetchNetflixOriginals);
            SetMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
            return res;
        }
        Data();
    },[]);

const truncate = (string , n) =>{
  return string?.length > n ? string.substr(0 , n-1) + ". . ." : string
}
  return (
    <header className=' h-[448px] relative text-white object-contain' style={{backgroundSize : "cover" ,backgroundImage :`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,}}>
      <div className=' ml-[30px]'>
          <h1 className=''>{ movie?.title || movie?.name || movie?.original_name || movie?.heading}</h1>
          <div>
          <button>Play</button>
          <button>My List</button></div>
          <h1>{truncate(movie?.overview , 150)}</h1>
      </div>
      <div className=' absolute bottom-0 w-screen h-[200px] bg-gradient-to-t from-black via-transparent to-transparent '></div>
    </header>
  )
}

export default Banner