import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import ContentSection from '../components/content-section';
import GridNowPlaying from '../components/MovieGrid';
const Home = () => {
  return (
    <div>
        <Header />
        <main className="bg-black">
        <Hero />
        <ContentSection/>
        <GridNowPlaying/>
      </main>
    </div>

  );

};

export default Home;