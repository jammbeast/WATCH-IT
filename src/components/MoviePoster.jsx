import React from 'react';

const MoviePoster = ({ title, genres, releaseDate, posterUrl }) => {
  const genreNames = genres && genres.length > 0 
    ? genres.join(', ') 
    : 'No genre available';

  return (
    <div className="shrink-0 relative flex flex-col rounded-[10px] p-4 w-48"> {/* Увеличили ширину контейнера */}
      <img className="relative z-10 h-auto w-48 rounded-md" src={posterUrl} alt={title} /> {/* Изменили размер изображения */}
      
      {/* Заголовок с обрезкой текста при длинных названиях */}
      <h2 className="font-['Teko'] text-3xl mt-2 font-normal tracking-wider text-[#dbdcd0] overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </h2>
      
      <h3 className="font-['Teko'] text-xl font-normal tracking-wide text-[#808080]">
        {genreNames}
      </h3>
      <div className="rounded-[40px] font-['Teko'] text-xl font-normal tracking-wide text-[#808080]">
        {releaseDate ? releaseDate : 'Release date not available'}
      </div>
    </div>
  );
};

export default MoviePoster;
