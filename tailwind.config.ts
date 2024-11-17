import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        facebookBlue: '#1877F2',
        youTube: '#FF0000',
        twitter: '#1DA1F2',
        instagramStart: '#F58529',
        instagramMiddle: '#D62976',
        instagramEnd: '#962FBF',
        tikTok: '#010002',
        main: '#044e83',
        sub: '#2eb6e8'
      },
      backgroundImage: {
        'instagram-gradient':
          'linear-gradient(to right, #F58529, #D62976, #962FBF)'
      },
      boxShadow: {
        custom: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      },
      screens: {
        xs: '500px',
        sm: '639px',
        md: '769px',
        lg: '1025px',
        'xl-lg': '1100px',
        xl: '1350px'
      }
    }
  },
  plugins: []
}
export default config
