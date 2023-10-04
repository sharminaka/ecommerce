/** @type {import('tailwindcss').Config} */
module.exports = {
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
      // Move the other styles outside of the backgroundImage object
      backgroundColor: {
        'category': '#f3f4f6',
      },
      padding: {
        'category': '8px',
      },
      margin: {
        'category': '8px 0',
      },
      borderRadius: {
        'category': '4px',
      },
      flex: {
        'category-center': 'center',
      },
      cursor: {
        'category': 'pointer',
      },
      
    },
  },
  plugins: [],
};
