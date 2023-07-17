import React from 'react';

function LanguageButtons({ lang, setLanguage }) {
    return (
        <>
            <button onClick={() => setLanguage('es')}>
                <img
                    src="./arg.webp"
                    width={40}
                    className="h-full rounded-md"
                    alt={lang.languages.es}
                    title={lang.languages.es}
                />
            </button>
            <button onClick={() => setLanguage('en')}>
                <img
                    src="./usa.png"
                    width={40}
                    className="h-full rounded-md"
                    alt={lang.languages.en}
                    title={lang.languages.en}
                />
            </button>
            <button onClick={() => setLanguage('it')}>
                <img
                    src="./italy.png"
                    width={40}
                    className="h-full rounded-md"
                    alt={lang.languages.it}
                    title={lang.languages.it}
                />
            </button>
        </>
    );
}

export default LanguageButtons;
