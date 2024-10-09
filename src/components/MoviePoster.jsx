import React from 'react';

const MoviePoster = ({ title, genres, releaseDate, posterUrl }) => {
  const genreNames = genres && genres.length > 0 
    ? genres.join(', ')
    : 'No genre available';

  const handleTitleClick = () => {
    console.log(`Clicked on movie title: ${title}`);
  };

  return (
    <div className="shrink-0 relative flex flex-col rounded-[10px] p-4 w-48" style={{ userSelect: 'none' }}>
      <img className="relative z-10 h-auto w-48 transition-transform duration-200 transform hover:scale-105" 
           src={posterUrl} alt={title} />
      <h2 
        className="font-rubik-mono-one-regular text-xl mt-2 font-normal text-[#dbdcd0] text-ellipsis"
        style={{ userSelect: 'text', cursor: 'pointer' }} 
        onClick={handleTitleClick}
      >
        {title}
      </h2>
      <h3 className="font-['Teko'] text-xl font-normal tracking-wide text-[#808080]">
        {genreNames}
      </h3>
      <div className="rounded-[40px] font-['Teko'] text-xl font-normal tracking-wide text-[#808080]">
        {releaseDate || 'Release date not available'}
      </div>
    </div>
  );
};

export default MoviePoster;