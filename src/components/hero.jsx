import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
  <div className="relative">
    <div className="relative -mt-16">
      <div className="trapezoid h-screen bg-[#D69142] z-10"></div>
    </div>

    <div className="h-screen absolute inset-x-0 top-0 z-20 container grid-rows-12 mx-auto grid gap-x-10 px-4 sm:grid-cols-12">
      <div className="row-span-2 col-span-4 row-start-10 col-start-3 border leading-none text-[128px] text-white font-teko tracking-[0.035em]">
        WATCH IT?
      </div>
      <div className="col-span-2 col-start-3 row-start-9 font-teko text-4xl border text-white flex items-end">
        Welcome to
      </div>
      <div className="row-span-1 col-span-4 col-start-5 row-start-12 flex justify-center">
        <button className="h-12 w-full bg-black text-white rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] text-2xl font-teko">
          Your Button
        </button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Hero;