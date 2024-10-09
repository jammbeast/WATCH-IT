import React from 'react';


const Loop = () => {
    return (
      <div className="w-full bg-[#DBDCD0] py-4 overflow-hidden">
        <div className="relative flex whitespace-nowrap">
            {/* Первый блок текста */}
            <div className="flex animate-scroll">
                <span className="mx-12 font-roboto-mono text-5xl">Get your movies and TV shows collection and personal rating in one place and share it with all world</span>
                <span className="mx-12 font-roboto-mono text-5xl">Get your movies and TV shows collection and personal rating in one place and share it with all world</span>
                
            </div>
            {/* Второй блок текста для плавного скролла */}
            <div className="flex animate-scroll">
                <span className="mx-12 font-roboto-mono text-5xl">Get your movies and TV shows collection and personal rating in one place and share it with all world</span>
                <span className="mx-12 font-roboto-mono text-5xl">Get your movies and TV shows collection and personal rating in one place and share it with all world</span>
            </div>
        </div>
      </div>
    );
};
export default Loop