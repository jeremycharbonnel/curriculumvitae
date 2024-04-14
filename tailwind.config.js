/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                100: '#4C566A',
                200: '#434C5E',
                300: '#3B4252',
                400: '#2E3440',
                DEFAULT: '#2E3440',
            },
            white: {
                100: '#ECEFF4',
                200: '#E5E9F0',
                300: '#D8DEE9',
                DEFAULT: '#ECEFF4',
            },
            blue: {
                100: '#8FBCBB',
                200: '#88C0D0',
                300: '#81A1C1',
                400: '#5E81AC',
                DEFAULT: '#81A1C1',
            },
            purple: '#B48EAD',
            green: '#A3BE8C',
            yellow: '#EBCB8B',
            orange: '#D08770',
            red: '#BF616A',
        },
        fontFamily: {
            firacode: ['"Fira Code"', ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    darkMode: 'selector',
    plugins: [require('tailwindcss-hero-patterns')],
}
