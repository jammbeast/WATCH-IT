import React from 'react';
import Navbar from '../components/header';
import GridNowPlaying from '../components/MovieGrid';
import Loop from '../components/looped';
import ScrollTitle from '../components/Logo';
import ContentSection from '../components/content-section';
const Home = () => {
  return (
    <div>
        <main className="bg-black min-h-[3000px]">
        <Loop/>
        <ScrollTitle/>
        <Navbar/>
        <ContentSection/>
        <GridNowPlaying/>
      </main>
    </div>

  );

};

export default Home;