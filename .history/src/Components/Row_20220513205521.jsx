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
        
    <p></p>
    </div>
  )
}

export default Row