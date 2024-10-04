import React from 'react';

const ContentSection = () => {
    return (
      <div className="content-section mt-14 ">
        <div className="container mx-auto grid gap-x-10 px-4 sm:grid-cols-12 sm:grid-rows-5">

          {/* Первый блок: Your Ultimate Watchlist Awaits! */}
          <div className="col-start-3 col-span-4 bg-[#d69142] row-span-2 rounded-[27px] px-6 py-6 flex flex-col justify-between">
            <div className="text-[#dbdcd0] text-4xl font-['Teko'] mb-2 leading-tight">
              Your Ultimate Watchlist Awaits!
            </div>
            <div className="text-black text-2xl font-['Teko'] mb-4 leading-tight">
              Never lose track of a must-see movie or binge-worthy show again!
            </div>
            <div className="text-black text-2xl font-['Teko'] leading-tight">
              Your personalized watchlist will be your guide through the vast world of movies and TV shows. Start building yours today!
            </div>
          </div>

          {/* Второй блок: Rate Your Viewing Experience! */}
          <div className="col-start-3 col-span-4 bg-[#9B0C29] row-span-2 row-start-4 rounded-[27px] px-6 py-6 flex flex-col">
            <div className="text-[#dbdcd0] text-4xl leading-tight font-['Teko'] mb-2">
              Rate Your Viewing Experience!
            </div>
            <div className="text-black text-2xl max-w-full leading-relaxed font-['Teko']">
              Loved it? Hated it? Share your thoughts with the world using our easy rating system. Start rating now and join the conversation!
            </div>
          </div>

          {/* Третий блок: Lights, Camera, Reviews! */}
          <div className="col-start-7 col-span-4 bg-[#808080] row-span-5 rounded-[27px] flex flex-col px-6 py-6">
            <div className="text-[#dbdcd0] text-4xl font-['Teko'] mb-4 leading-tight">
              Lights, Camera, Reviews!
            </div>
            <div className="text-black text-2xl font-['Teko'] mb-4 leading-relaxed max-w-full">
              Ready to share your cinematic wisdom with the world? Dive into the captivating world of film criticism and let your voice be heard!
            </div>
            <div className="text-[#dbdcd0] text-2xl font-['Teko'] mb-4 leading-relaxed max-w-full">
              Was the acting Oscar-worthy or cringe-inducing? Did the plot keep you on the edge of your seat or leave you wanting more? Tell us what you think!
            </div>
            <div className="text-black text-2xl font-['Teko'] leading-relaxed max-w-full">
              Your reviews can help others discover hidden gems, avoid cinematic misfires, and spark lively discussions about the art of filmmaking. So, grab your popcorn, settle into your seat, and let the words flow!
            </div>
          </div>

          {/* Четвертый блок: Follow Us On GitHub */}
          <div className="bg-[#1E1E1E] rounded-[27px] flex flex-col items-center px-6 py-4 mt-6 mb-4 col-start-3 col-span-8"> {/* Убрали сетку и добавили отступ сверху */}
            <div className="text-[#dbdcd0] text-3xl font-normal font-['Teko'] text-center">
              FOLLOW US ON GITHUB
            </div>
            <div className="text-[#dbdcd0] text-2xl font-normal font-['Teko'] text-center">
              Keep up with updates and our plans
            </div>
          </div>

        </div>
      </div>
    );
};

export default ContentSection;