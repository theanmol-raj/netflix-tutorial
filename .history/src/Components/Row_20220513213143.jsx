import React, { useEffect, useState } from "react";
import answer from "../Assets/axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, SetMovies] = useState(null);
  const base = `https://image.tmdb.org/t/p/original`;

  useEffect(() => {
    async function Data() {
      const res = await answer.get(fetchUrl);
      SetMovies(res.data.results);
      return res;
    }
    Data();
  }, [fetchUrl]);

  return (
    <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {movies.map(movie =>(
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key = {movie.id}
                    src={`${base}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path

                    }`}
                
                alt={movie.name}    
                />
                )   
            ))}
            </div>
            
        </div>
  );
}

export default Row;
