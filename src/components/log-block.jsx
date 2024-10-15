import React from 'react';

const LogBlock = () => {
    return (
        <div className="col-start-3 col-span-8 bg-[#DBDCD0] h-[70%] mt-36">
            <div className="text-black font-rubik-mono-one-regular text-4xl text-center py-4">
                [дОБРО ПОЖАЛОВАТЬ, ГОСТЬ]
            </div>
            <div className="col-start-4 col-span-5 bg-black h-[80%] mx-auto my-auto w-[90%] flex flex-col justify-around py-10 px-8">
                <div className="font-pt-mono-regular text-[#DBDCD0] text-4xl mb-6">
                    /Продолжить с Google
                </div>
                <div className="font-pt-mono-regular text-[#DBDCD0] text-4xl mb-6">
                    /Продолжить с Github
                </div>
                <div className="font-pt-mono-regular text-[#DBDCD0] text-4xl mb-6">
                    /Продолжить с Email
                </div>
                <div className="font-pt-mono-regular text-[#DBDCD0] text-xs text-center mt-6">
                    Регистрируясь, вы соглашаетесь с нашими <span className="underline">Условиями предоставления услуг</span> и <span className="underline">Политикой конфиденциальности</span>. Информацию о том, как мы используем файлы cookie, см. в нашей <span className="underline">Политике использования файлов cookie</span>.
                </div>
            </div>
        </div>
    );
};

export default LogBlock;