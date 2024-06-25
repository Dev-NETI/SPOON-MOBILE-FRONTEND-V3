module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkmode: 'class',
    theme: {
        extend: {
            colors: {
                'main-bg': '#000975',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('tailwindcss-animated')],
}
