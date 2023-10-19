import { useEffect, useState } from "react";
import request from "../request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]; //pick one random movie each time

  useEffect(() => {
    axios
      .get(request.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);

  const textTruncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="relative">
        <div className="bg-gradient-to-r from-black absolute top-0 left-0 h-[500px] lg:h-[700px] w-full" />
        <img
          alt={movie?.title}
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="w-full h-[500px] lg:h-[700px] object-cover bg-no-repeat"
        />

        <div className="absolute left-4 top-[30%] z-20">
          <h1 className="text-white text-3xl font-medium">
            {movie?.original_title}
          </h1>
          <div className="mt-2 flex gap-4 flex-row w-full">
            <button className="border bg-white text-black font-medium px-6 py-2">
              Pay
            </button>
            <button className="border border-white font-medium px-4 py-2">
              Watch Later
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-3 font-medium">
            <span>Release </span>
            {movie?.release_date}
          </p>
          <p className="text-base text-gray-200 mt-3 max-w-[85%] md:max-w-[60%] lg:max-w-[55%]">
            {textTruncate(movie?.overview, 180)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
