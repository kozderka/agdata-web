/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./content/**/*.md" // Přidáno pro Tailwind, aby skenoval i Markdown soubory pro třídy (např. pokud používáte prose)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        emerald: {
            50: '#ecfdf5',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
        },
        yellow: {
            400: '#facc15',
            500: '#eab308',
        }
      },
      // Přidání typografických stylů pro obsah generovaný z Markdownu
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.green.600'),
              '&:hover': {
                color: theme('colors.green.700'),
              },
            },
            h1: { color: theme('colors.emerald.700')},
            h2: { color: theme('colors.emerald.700')},
            h3: { color: theme('colors.emerald.600')},
            // ... další styly pro prose
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Plugin pro hezké formátování obsahu z Markdownu
  ],
}