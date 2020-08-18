import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import ScrollContainer from "react-indiana-drag-scroll";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <ScrollContainer className="row__posters">
        {/* <div className="row__posters"> */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} //use && if theres no else or : otherwise use ?
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        {/* </div> */}
      </ScrollContainer>
    </div>
  );
}

export default Row;
