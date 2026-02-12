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
          bg: '#0A0D10',
          panel: '#12171D',
          border: '#26303A',
          accent: '#1B6E63',
          text: '#F3F5F7',
          muted: '#9FAAB5'
        }
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
