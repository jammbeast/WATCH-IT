import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Сбрасываем предыдущие анимации
    if (location.pathname === '/') {
      gsap.set(".letter", { opacity: 1, y: 0 });

      // Анимация для букв в ссылках навигации, только на домашней странице
      tl.from(".letter", {
        opacity: 0,
        y: -50,
        duration: 0.3,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Очистка анимации при размонтировании компонента
      return () => tl.kill();
    }
  }, [location.pathname]); // Анимация запускается только при изменении пути

  return (
    <div className="sticky top-0 z-50">
      <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-x-10 mx-24 px-1">
        <nav className="col-start-3 col-span-8 bg-[#DBDCD0] header">
          <ul className="mx-auto font-rubik-mono-one-regular text-3xl text-black flex justify-center space-x-10">
            <li>
              <Link to="/">
                {[..."[ДОМОЙ]"].map((char, index) => (
                  <span key={index} className="letter inline-block">
                    {char}
                  </span>
                ))}
              </Link>
            </li>
            <li>
              <Link to="/auth">
                {[..."[АККАУНТ]"].map((char, index) => (
                  <span key={index} className="letter inline-block">
                    {char}
                  </span>
                ))}
              </Link>
            </li>
            <li>
              <Link to="/my-list">
                {[..."[МОЙ/ЛИСТ]"].map((char, index) => (
                  <span key={index} className="letter inline-block">
                    {char}
                  </span>
                ))}
              </Link>
            </li>
            <li>
              <Link to="/add">
                {[..."[ДОБАВИТЬ]"].map((char, index) => (
                  <span key={index} className="letter inline-block">
                    {char}
                  </span>
                ))}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;