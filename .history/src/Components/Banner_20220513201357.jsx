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

console.log(movie)
  return (
    <header className=' h-[448px] relative text-white object-contain' style={{backgroundSize : "cover" ,backgroundImage :`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,}}>
      <div className=''>

      </div>
    </header>
  )
}

export default Banner