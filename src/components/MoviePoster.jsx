import React from 'react';

const MoviePoster = ({ title, genres, releaseDate, posterUrl }) => {
  const genreNames = genres && genres.length > 0 
    ? genres.join(', ') 
    : 'No genre available';

  const handleTitleClick = () => {
    // логикa  обработки клика по названию,
    console.log(`Clicked on movie title: ${title}`);  
  };

  return (
    <div className="shrink-0 relative flex flex-col rounded-[10px] p-4 w-48" style={{ userSelect: 'none' }}>
      <img className="relative z-10 h-auto w-48 rounded-md" src={posterUrl} alt={title} />
      {/* Название фильма с возможностью клика */}
      <h2 
        className="font-['Teko'] text-3xl mt-2 font-normal tracking-wider text-[#dbdcd0] overflow-hidden text-ellipsis whitespace-nowrap"
        style={{ userSelect: 'text', cursor: 'pointer' }} // Разрешить выделение и добавить указатель курсора
        onClick={handleTitleClick}
      >
        {title}
      </h2>
      
      {/* Жанры и дата выхода */}
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