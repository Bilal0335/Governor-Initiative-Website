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
        tikTok: '#010002'
      },
      backgroundImage: {
        'instagram-gradient':
          'linear-gradient(to right, #F58529, #D62976, #962FBF)'
      }
    }
  },
  plugins: []
}
export default config
