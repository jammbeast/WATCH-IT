import React, {useEffect} from 'react';
import Navbar from '../components/header';
import GridNowPlaying from '../components/MovieGrid';
import Loop from '../components/looped';
import ScrollTitle from '../components/Logo';
import ContentSection from '../components/content-section';
import { gsap } from 'gsap';
const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    document.body.style.overflow = "hidden"; // Запрещаем скролл страницы
    tl.fromTo(
      ".scroll-title",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "expo.out" }
    );
    
    // Синхронизируем анимации .loop и .navbar
    tl.fromTo(
      ".loop",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "+=3"
    )
      .fromTo(
        ".navbar",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: "elastic.out(1, 0.5)", onComplete: () => document.body.style.overflow = "auto" },
        "-=0.6" // Начинаем анимацию .navbar сразу после .loop с небольшой перекрывающейся задержкой
      );
  }, []);

  
  return (
    <main className="bg-black min-h-screen flex flex-col overflow-x-hidden">
      {/* Верхний блок: Логотип и Навбар */}
      <header className="bg-black h-screen flex flex-col justify-between items-center">
        <div className = "navbar">
      <Navbar />
      </div >
      <div className = "scroll-title">
        <ScrollTitle />
        </div>
        <div className = "loop"><Loop /></div>
      </header>
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        {/* Левая колонка */}
        <div>
        </div>
        <div className ="col-span-2">
          <ContentSection />
        </div>
        
        {/* Правая колонка */}
        <div className = "col-span-2">
          <GridNowPlaying />
        </div>
      </div>
    </main>
  );
};

export default Home;
