import React, { useState, useEffect, useRef } from 'react';
import MoviePoster from './MoviePoster';

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/movies');
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className ="pt-8">
    <div className="container mx-auto grid gap-x-10 px-4 sm:grid-cols-12 max-h-10 ">
    <div class="w-[267px] col-start-3 text-[#dbdcd0] text-4xl font-normal font-['Teko']">New and Notable </div>

        <button className="col-start-3 text-[#D69142] text-start font-teko text-2xl">Tv Shows </button>
        <button className="col-start-4 text-[#9B0C29] text-start font-teko text-2xl">Movies </button>
</div>
    <div
      className=" pl-11 mx-auto flex w-full max-w-[100%] space-x-20 overflow-x-auto bg-black px-4 py-12 carousel-container"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
        
      {movies.map((movie) => (
        <MoviePoster 
          key={movie.id}
          title={movie.title}
          genres={movie.genre_ids} // это id жанров, их нужно преобразовать на уровне серверного API
          releaseDate={movie.release_date}
          posterUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      ))}
    </div>
    </div>
  );
};

export default MovieGrid;