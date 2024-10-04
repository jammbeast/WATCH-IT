import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div class="sticky top-0 z-50 bg-black/30 backdrop-blur-lg text-white">
      <div class="container mx-auto grid items-center gap-x-10 px-4 sm:grid-cols-12">
        <div class="relative z-20 col-span-2 col-start-3 border-2 border-red-500 font-teko text-6xl ">Watch It?</div>
        <nav class="col-span-4 col-start-7 ">
          <ul class="flex items-center justify-between space-x-8 font-text-me-one text-2xl text-black ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/my-list">My List</Link></li>
            <li class="flex items-center">
              <Link to="/auth" class="rounded-full">
                <button class="h-full w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 flex items-center justify-center">
                  <img class="h-full w-full rounded-full" src="https://placehold.jp/60x60.png" alt="something" />
                </button>
              </Link>
            </li>
            <li class="flex-grow">
              <button class="w-full rounded-2xl bg-black font-teko text-3xl font-normal text-white hover:bg-gray-500 py-2 flex items-center justify-center">+Title?</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    );
};
export default Header