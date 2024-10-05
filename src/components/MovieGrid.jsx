import React, { useState, useEffect, useRef } from 'react';
import MoviePoster from './MoviePoster';

const GridNowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('movies');
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/${category === 'tv' ? 'tvShows' : 'movies'}`);
        if (!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`)}
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [category]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    e.preventDefault(); // Отключение выделения при нажатии
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Отключение выделения при перемещении
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.8; // Скорость прокрутки
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="pt-8">
      {/* Категории переключения */}
      <div className="container mx-auto grid gap-x-10 px-4 sm:grid-cols-12 max-h-10">
        <div className="w-[267px] col-start-3 text-[#dbdcd0] text-4xl font-normal font-['Teko']">New and Notable </div>
        
        <button className={`col-start-3  text-start font-teko text-2xl ${category === 'tv' ? 'text-[#D69142]' : 'text-[#808080]'}`}
        onClick={()=>setCategory('tv')}
        >Tv Shows
           </button>
        <button className={`col-start-4  text-start font-teko text-2xl ${category ==='movies' ? 'text-[#9B0C29]' : 'text-[#808080]'}`}
        onClick={()=>setCategory('movies')} 
        >Movies </button>
      </div>
      <div
        className="pl-11 mx-auto flex w-full max-w-[100%] space-x-20 overflow-x-auto bg-black px-4 py-12 carousel-container"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'default' }} // Курсор при перемещении
      >
        {movies.map((movie) => (
  <MoviePoster
    key={movie.id}
    title={movie.title || movie.name} // У сериалов используется поле 'name'
    genres={movie.genre_ids}
    releaseDate={movie.release_date || movie.first_air_date} // У сериалов это 'first_air_date'
    posterUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
  />
))}
      </div>
    </div>
  );
};

export default GridNowPlaying;
