import { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import { LangContext } from '../../App';
import { AppWrap } from '../../wrapper';
import { ButtonDropdown } from '../../components';

const Header = () => {
    const langContext = useContext(LangContext);
    const lang = langContext.header;

    return (
        <>
            <div className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden p-7 text-white">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-500 to-indigo-500"></div>
                <div className="absolute top-0 left-0 h-full w-screen bg-black/70"></div>
                <div className="absolute top-0 left-0 m-auto flex h-full w-full flex-col items-center justify-center text-center 2xl:-top-12">

                    <div className="absolute top-0 left-0 m-auto flex h-full w-full flex-col items-center justify-center text-center 2xl:-top-12">
                        <h1 className=" animation px-4 font-[Prompt] text-5xl font-semibold uppercase italic md:text-6xl">
                            Camila Bertolani
                        </h1>
                        <span className="text-xl">
                            <Typewriter
                                options={{
                                    strings: lang.typewriter,
                                    autoStart: true,
                                    loop: true,
                                    delay: 110,
                                    deleteSpeed: 100,
                                    pauseFor: 1500,
                                }}
                            />
                        </span>
                        <div className="mt-[4rem] grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                            <a
                                href="#projects"
                                className="w-[13rem] rounded-md bg-purple-500 px-4 py-2 text-white shadow-lg shadow-purple-700/60 transition hover:bg-purple-700"
                            >
                                {lang.textBtnProjects}
                            </a>
                            <ButtonDropdown lang={lang} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppWrap(Header, 'home', '', 'absolute h-full');
