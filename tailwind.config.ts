import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        title: 'max(34px, 104px)',
      },
      colors: {
        'color-gray-1': '#12131A',
        'color-gray-2': '#F7F9FF',
        'color-gray-3': '#949599',
        'color-white': '#FFFFFF',
        'color-dark-blue': '#00020A',
        'color-dark-purple': '#03000A',
        'color-light-gray': '#F2F2F2',
      },
    },
  },
  plugins: [],
}
export default config
