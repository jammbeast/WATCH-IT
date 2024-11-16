import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MoviePage() {
  const { id } = useParams(); // Получаем ID фильма из URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);  // Добавляем состояние для ошибки

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(`http://localhost:3001/api/movie/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(error.message);  // Устанавливаем сообщение об ошибке
      }
    }

    fetchMovie();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-page p-4">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-md" />
      <p className="mt-2">{movie.overview}</p>
      <p className="mt-2">Release Date: {movie.release_date}</p>
    </div>
  );
}

export default MoviePage;
