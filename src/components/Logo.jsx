import React, { useState, useEffect } from 'react';

const ScrollTitle = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);
        };

        // Добавляем обработчик события scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  

    // Рассчитываем ширину полоски 
    const lineWidth = Math.max(663 - scrollPosition , 0);
    const lineWidthSmall = Math.max(126 - scrollPosition * 0.2, 0); // Уменьшаем ширину

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-x-10 mx-24 px-1 mt-6  ">
            
            <h1 className="text-[328px] col-start-2 col-span-6 mx-20 leading-none font-bebas-neue text-[#DBDCD0] relative">
                WATCH
                {/* Полоска слева */}
                <span 
                  className="absolute left-0 bottom-[76px] transform bg-black h-[3px] transition-all duration-75"
                  style={{ width: `${lineWidth}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[88px] transform bg-black h-[4px] transition-all duration-75"
                  style={{ width: `${lineWidth}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[98px] transform bg-black h-[5px] transition-all duration-75"
                  style={{ width: `${lineWidth}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[108px] transform bg-black h-[6px] transition-all duration-75"
                  style={{ width: `${lineWidth}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[142px] transform bg-black h-[7px] transition-all duration-75"
                  style={{ width: `${lineWidth}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[151px] transform bg-black h-[8px] transition-all duration-75"
                  style={{ width: `${lineWidth}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[164px] transform bg-black h-[9px] transition-all duration-75"
                  style={{ width: `${lineWidth}px` }}  
                ></span>

            </h1>
            <h1 className="text-[288px] col-start-7  col-span-2 mx-12 leading-none font-bebas-neue text-[#DBDCD0] relative">
                IT
                {/* Полоска слева */}
                <span 
                  className="absolute left-0 bottom-[66px] transform bg-black h-[3px] transition-all duration-75"
                  style={{ width: `${lineWidthSmall}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[78px] transform bg-black h-[4px] transition-all duration-75"
                  style={{ width: `${lineWidthSmall}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[88px] transform bg-black h-[5px] transition-all duration-75"
                  style={{ width: `${lineWidthSmall}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[98px] transform bg-black h-[6px] transition-all duration-75"
                  style={{ width: `${lineWidthSmall}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[132px] transform bg-black h-[7px] transition-all duration-75"
                  style={{ width: `${lineWidthSmall}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[141px] transform bg-black h-[8px] transition-all duration-75"
                  style={{ width: `${lineWidthSmall}px` }}  
                ></span>
                <span 
                  className="absolute left-0 bottom-[154px] transform bg-black h-[9px] transition-all duration-75"
                  style={{ width: `${lineWidthSmall}px` }}  
                ></span>

            </h1>
        </div>
    );
};

export default ScrollTitle;
