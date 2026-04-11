import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Arc Radius brand colors - Pride flag inspired
        pride: {
          red: '#E40303',
          orange: '#FF8C00',
          yellow: '#FFED00',
          green: '#008026',
          blue: '#24408E',
          purple: '#732982',
        },
      },
      fontFamily: {
        // Primary sans-serif - Greycliff CF
        sans: ['Greycliff CF', 'system-ui', 'sans-serif'],
        // Serif font - Quincy CF
        serif: ['Quincy CF', 'Georgia', 'serif'],
        // Monospace - Dank Mono
        mono: ['Dank Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        // Rounded sans-serif - Visby Round CF
        rounded: ['Visby Round CF', 'system-ui', 'sans-serif'],
        // Named aliases for convenience
        heading: ['Greycliff CF', 'system-ui', 'sans-serif'],
        body: ['Quincy CF', 'Georgia', 'serif'],
        code: ['Dank Mono', 'monospace'],
        visby: ['Visby Round CF', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
