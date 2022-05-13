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
      <div className=' text-left ml-[30px] pt-[140px] h-[190px] '>
          <h1 className=' text-5xl font-extrabold pb-[0.3rem]'>{ movie?.title || movie?.name || movie?.original_name || movie?.heading}</h1>
          <div className=' flex space-x-8 text-white'>
          <button className=' bg-black/30 px-4 py-1 '>Play</button>
          <button className=' bg-black/30 px-4 py-1 '>My List</button></div>
          <h1 className=' w-[45rem] leading-relaxed max-w-[360px] text-sm font-medium  '>{truncate(movie?.overview , 150)}</h1>
      </div>
      <div className=' absolute bottom-0 w-screen h-[200px] bg-gradient-to-t from-black via-transparent to-transparent '></div>
    </header>
  )
}

export default Banner