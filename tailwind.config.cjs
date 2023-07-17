/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                '2xsm': '293px',
                '1xsm': '330px',
                xsm: '500px',
                500: '500px',
            },
            height: {
                '50vh': '50vh',
            },
            gap: {
                '40Negativo': '-10rem',
            },
            marginRight: {
                20: '8rem',
            },
            colors: {
                CustomBlack: '#182122',
            },
            fontSize: {
                '4xl': '2rem', // Ajusta este valor para cambiar el tamaño de los iconos
            },
            custom: {
                blue: '#123456', // Reemplaza esto con tu color personalizado
            },
        },
    },
    variants: {
        extend: {
            display: ['group-focus'],
        },
    },
    plugins: [],
};
