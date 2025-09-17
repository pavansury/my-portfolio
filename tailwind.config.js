/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      colors: {
        // Modern color palette
        primary: {
          DEFAULT: '#4F46E5',    // Indigo-600
          light: '#6366F1',     // Indigo-500
          dark: '#4338CA',      // Indigo-700
          subtle: '#EEF2FF',    // Indigo-50
        },
        secondary: {
          DEFAULT: '#06B6D4',   // Cyan-500
          light: '#22D3EE',     // Cyan-400
          dark: '#0891B2',      // Cyan-600
        },
        dark: {
          DEFAULT: '#0F172A',   // Slate-900
          light: '#1E293B',     // Slate-800
          lighter: '#334155',   // Slate-700
          subtle: '#64748B',    // Slate-500
        },
        light: {
          DEFAULT: '#F8FAFC',   // Slate-50
          subtle: '#F1F5F9',    // Slate-100
          muted: '#E2E8F0',     // Slate-200
        },
        success: {
          DEFAULT: '#10B981',   // Emerald-500
          light: '#34D399',     // Emerald-400
          dark: '#059669',      // Emerald-600
        },
        warning: {
          DEFAULT: '#F59E0B',   // Amber-500
          light: '#FBBF24',     // Amber-400
          dark: '#D97706',      // Amber-600
        },
        error: {
          DEFAULT: '#EF4444',   // Red-500
          light: '#F87171',     // Red-400
          dark: '#DC2626',      // Red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '3.75rem',     // 60px
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        '1': '1',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}