const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}' // Dodane dla NextUI
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      apply: {
        'navbar-link':
          'inline-block p-2 text-base font-medium no-underline transition-colors duration-300 ease-in-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: '#FFFFFF',
            foreground: '#000000',
            focus: '#ffffff'
          } // light theme colors
        },
        dark: {
          colors: {
            background: '#0f1518',
            foreground: '#d0edd6',
            darkSeaGreen: '#78a17c',
            primary: {
              DEFAULT: '#78a17c',
              foreground: '#d0edd6',
              background: '#0f1518',
              primaryColorGreen: '#abe5b1',
              primaryColorDark: '#90c0a6',
              darkGreen: '#1a2327',
              darkSeaGreen: '#78a17c',
              textGreen: '#4e905a'
            },
            focus: '#78a17c'
          }
        }
      }
    })
  ]
}
