const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: true,
        content: ['*.html'],
    },
    darkMode: false,
    theme: {
        screens: {
            'sm': {'max': '800px'},
            'lg': '801px',
        },              
        colors: {
            black: '#000',
            blue: colors.lightBlue,
            gray: colors.coolGray,
            pink: colors.fuchsia,
            rose: colors.rose,
            white: '#fff',
        },
        container: {
            center: true
        },
        fontFamily: {
            sans: ['Operator Mono', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
}