import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F7F8F7',
          surface: '#FFFFFF',
          border: '#E5E7EB',
          text: '#1F1F1F',
          muted: '#5E6570',
          accent: '#1B3C59'
        }
      },
      boxShadow: {
        soft: '0 2px 10px rgba(16, 24, 40, 0.05)'
      }
    }
  },
  plugins: []
};

export default config;
