import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // состояние для модального окна
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    if (location.pathname === '/') {
      gsap.set(".letter", { opacity: 1, y: 0 });
      tl.from(".letter", {
        opacity: 0,
        y: -50,
        duration: 0.001,
        ease: "power3.out",
        stagger: 0.03,
      });
      return () => tl.kill();
    }
  }, [location.pathname]);

  // Функция для открытия/закрытия модального окна
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
              {/* При клике по "Добавить" открывается модальное окно */}
              <button onClick={toggleModal} className="letter inline-block">
                {[..."[ДОБАВИТЬ]"].map((char, index) => (
                  <span key={index} className="letter">
                    {char}
                  </span>
                ))}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Модальное окно для поиска */}
      {isModalOpen && <SearchModal onClose={toggleModal} />}
    </div>
  );
};

export default Navbar;
