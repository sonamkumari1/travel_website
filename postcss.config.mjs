const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
  extend: {
    backgroundImage: {
      'bg-img-1': "url('/img-1.png')",
      'bg-img-2': "url('/img-2.png')",
      'feature-bg': "url('/feature-bg.png')",
      pattern: "url('/pattern.png')",
      'pattern-2': "url('/pattern-bg.png')",
    },
  },
},

};

export default config;
