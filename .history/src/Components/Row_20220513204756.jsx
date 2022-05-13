import React, { useEffect, useState } from 'react'
import answer from '../Assets/axios';
import requests from '../Assets/Request';

function Row({title , fetchUrl , isLargeRow}) {
    const [movie ,SetMovie] = useState([]);
    const base =`https://image.tmdb.org/t/p/original/`


    useEffect(()=>{
        async function Data(){
            const res = await answer.get(requests);
            SetMovie(res.data.results);
            return res;
        }
        Data();
    },[]);
  return (
    <div>Row</div>
  )
}

export default Row