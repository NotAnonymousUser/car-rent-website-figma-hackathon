import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Neutral Palette
        primary: {
          900: '#2A196F',
          800: '#1D25B7',
          700: '#1A37A7',
          600: '#2E4BC8',
          500: '#3563E9',
          400: '#658DF1',
          300: '#85A8F8',
          200: '#ACC8FC',
          100: '#D6E4FD',
          white: '#FFFFFF',
        },
        // Success Colors
        success: {
          900: '#386506',
          800: '#4C7A08',
          700: '#559711',
          600: '#7FB519',
          500: '#9CD323',
          400: '#BCE455',
          300: '#D3F178',
          200: '#E8FAA6',
          100: '#F5FCD2',
        },
        // Error Colors
        error: {
          900: '#7A0619',
          800: '#930816',
          700: '#B71112',
          600: '#D82719',
          500: '#FF4423',
          400: '#FF7F59',
          300: '#FFA37A',
          200: '#FFCBA6',
          100: '#FFE7D3',
        },
        // Warning Colors
        warning: {
          900: '#7A4D08',
          800: '#936312',
          700: '#B78210',
          600: '#D8BA2A',
          500: '#FFC73A',
          400: '#FFD666',
          300: '#FFE488',
          200: '#FFEFB0',
          100: '#FFFBD7',
        },
        // Information Colors
        info: {
          900: '#102E7A',
          800: '#1A4393',
          700: '#2A6087',
          600: '#3D6108',
          500: '#54A6FF',
          400: '#7EC2FF',
          300: '#98D3FF',
          200: '#B6E5FF',
          100: '#DCF3FF',
        },
        // Secondary Colors
        secondary: {
          900: '#040815',
          800: '#080C19',
          700: '#0D121F',
          600: '#131825',
          500: '#1A202C',
          400: '#596780',
          300: '#90A3BF',
          200: '#C3D4E9',
          100: '#E0E9F4',
        },
      },
      fontFamily: {
        jakarta: ['var(--font-plus-jakarta-sans)'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '90px', letterSpacing: '-2%' }],
        'display-lg': ['60px', { lineHeight: '72px', letterSpacing: '-2%' }],
        'display-md': ['48px', { lineHeight: '60px', letterSpacing: '-2%' }],
        'display-sm': ['36px', { lineHeight: '48px', letterSpacing: '-2%' }],
        'display-xs': ['30px', { lineHeight: '40px', letterSpacing: '-2%' }],
        'xl': ['20px', { lineHeight: '30px', letterSpacing: '-2%' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '-2%' }],
        'md': ['16px', { lineHeight: '24px', letterSpacing: '-2%' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '-2%' }],
        'xs': ['12px', { lineHeight: '18px', letterSpacing: '-2%' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      padding: {
        'btn-sm': '10px 16px',
        'btn-md': '12px 20px',
        'btn-lg': '14px 24px',
      },
      borderRadius: {
        'btn': '10px',
      },
    },
  },
  plugins: [],
}

export default config;
