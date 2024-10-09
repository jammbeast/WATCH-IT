import React, {useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ContentSection = () => {
  
  return (
    <div>
      {/*  Watchlist */}
      <div className="pt-20 grid sm:grid-cols-2 lg:grid-cols-12 gap-x-10 mx-24 px-1">
        <div className="col-start-2 col-span-4 bg-[#9B0C29] text-center row-span-6 pb-2 shadow-[10px_-10px_0_0_#DBDCD0]">
          <div className="text-[#DBDCD0] inline-block font-ibm-plex-mono-regular px-6 bg-black text-3xl mt-2">
            Your Ultimate
            <br /> Watchlist Awaits!
          </div>
          <div className="text-center font-ibm-plex-mono-regular text-3xl pt-4">
            Never lose track of a must-see movie or binge-worthy show again!
          </div>
          <div className="text-center font-ibm-plex-mono-regular text-3xl pt-8">
            Your personalized watchlist will be your guide through the vast world of movies and TV shows. Start building yours today!
          </div>
        </div>

        {/* Rating */}
        <div className="col-start-8 col-span-4 row-span-4 bg-[#D69142] pb-2 z-10 shadow-[-10px_10px_0_0_#DBDCD0]">
          <div className="font-ibm-plex-mono-regular text-[#DBDCD0] text-3xl mt-2 inline-block px-4 bg-black">
            Rate Your Viewing <br /> Experience!
          </div>
          <div className="text-center font-ibm-plex-mono-regular text-3xl pt-8">
            Share your personal take on every movie and TV show you watch with our simple and intuitive rating system.
          </div>
        </div>
      </div>

      {/*  Reviews */}
      <div className="pt-20 grid sm:grid-cols-2 lg:grid-cols-12 gap-x-10 mx-24 px-1">
        <div className="col-start-2 col-span-10 relative bg-[#808080] mt-10 font-ibm-plex-mono-regular p-6 min-h-[400px]">
          {/**/}
          <div className="text-left pl-4 inline-block">
            <div className="text-[#DBDCD0] text-5xl">LIGHTS</div>
            <div className="text-[#DBDCD0] text-6xl">CAMERA</div>
            <div className="font-ibm-plex-mono-regular text-3xl pt-4 max-w-3xl">
              Share your thoughts on performances and plot twists. Whether it's a hidden GEM or a cinematic miss, your reviews can guide fellow viewers and spark conversations. Grab your popcorn and start reviewing!
            </div>
          </div>

          {/* Блок REVIEWS! */}
          <div className="relative mt-10">
            <div className="flex justify-between items-center">
              {/* Первый  REVIEWS! */}
              <div className="relative text-7xl flex items-center ">
                REVIEWS!
                <div className="absolute left-[40px] top-[10px] bg-black w-[88px] h-[64px] z-0"></div>
                <div className="absolute left-[40px] top-0 text-[#DBDCD0] z-10">EV</div>
              </div>

              {/* второй REVIEWS! */}
              <div className="relative text-7xl flex items-center">
                
                REVIEW
                <div className="relative text-[#DBDCD0] z-10">S!</div>
                <div className="absolute left-[-86px] top-1 bg-black w-[88px] h-[64px] z-0"></div>
                <div className="absolute left-[300px] top-1 bg-black w-[88px] h-[64px] z-0"></div>
              </div>

              {/* Третий REVIEWS! */}
              <div className="text-7xl text-[#DBDCD0]">REVIEWS!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;