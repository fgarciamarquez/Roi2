/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          extend: {
            width: {
              '100': '22rem',
            }
          },
          
          screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
          
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
          
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },
        
        "primary": "#4538D1",
                  
        "secondary": "#B5AFEC",
                  
        "accent": "#5CFFBD",
                  
        "neutral": "#3D4451",
                  
        "base-100": "#FBFBFB",
                  
        "info": "#65B2E8",
                  
        "success": "#5CFFBD",
                  
        "warning": "#FBBD23",
                  
        "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
