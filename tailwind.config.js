const defaultTheme = require('tailwindcss/defaultTheme');
const typographyTheme = require('./typography-theme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                gray: colors.warmGray,
                yellow: {
                    DEFAULT: '#FDEE30',
                },
                white: '#FEFEFE',
                black: '#000000'
            },
            spacing: {
                '104': '26rem',
                '110': '28rem',
                '118': '30rem',
                '126': '32rem',
                '132': '34rem',
                '140': '36rem',
            },
            fontFamily: {
                sans: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
                second: ['Cabin', ...defaultTheme.fontFamily.serif]
            },
            typography: typographyTheme
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],

    darkMode: 'media',
};
