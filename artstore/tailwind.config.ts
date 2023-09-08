import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        baloo: ['Baloo 2', 'sans'],
        roboto: ['Roboto', 'sans'],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '1.25rem',
        full: '999px',
        large: '5rem',
      },
      colors: {
        'yellow-dark': '#C47F17',
        'yellow-one': '#DBAC2C',
        'yellow-lights': '#F1E9C9',
        'purple-dark': '#4B2995',
        'purple-one': '#8047F8',
        'purple-light': '#EBE5F9',

        'black-75': '#535353',
        'brown-light': '#E5E4DD',
        'brown-dark': '#AEADA6',
        'yellow-light': '#F6F2CB',
        'green-dark': '#005B4A',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest1: '.99em',
      },
    },
  },
  plugins: [],
}
export default config
