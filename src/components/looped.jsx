import React from 'react';


const Loop = () => {
    return (
      <div className="w-full bg-[#DBDCD0] py-2 overflow-hidden">
        <div className="relative flex whitespace-nowrap">
            {/* Первый блок текста */}
            <div className="flex animate-scroll">
                <span className="mx-12 font-pt-mono-regular text-5xl">Соберите свою коллекцию фильмов и сериалов, добавьте личные оценки и делитесь с миром!</span>
                <span className="mx-12 font-pt-mono-regular text-5xl">Соберите свою коллекцию фильмов и сериалов, добавьте личные оценки и делитесь с миром!</span>
                
            </div>
            {/* Второй блок текста для плавного скролла */}
            <div className="flex animate-scroll">
                <span className="mx-12 font-pt-mono-regular text-5xl">Соберите свою коллекцию фильмов и сериалов, добавьте личные оценки и делитесь с миром!</span>
                <span className="mx-12 font-pt-mono-regular text-5xl">Соберите свою коллекцию фильмов и сериалов, добавьте личные оценки и делитесь с миром!</span>
            </div>
        </div>
      </div>
    );
};
export default Loop