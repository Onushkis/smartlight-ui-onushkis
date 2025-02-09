module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      'full': '50%',
    },
    fontSize: {
      'tiny': '2rem',
      'main': '1.188rem',
      'small': '0.813rem',
      'overskrift':'1.875rem',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
      
    },
        extend: {
          width: {
            '375': '23rem',
            '25': '1.563rem'
          },
          height: {
            '812': '51rem',
            '856': '53.5rem',
            '25': '1.563rem',
            '67': '4.188rem',
            '539': '33.688rem',
            '270': '16.875rem',
            '200': '16.875rem',
            
            },
          wordBreak: ['hover', 'focus'],
          colors: {
            'regal-violet': '#A693EB',
            'regal-red': '#FF9B9B',
            'regal-blue': '#93CAEB',
            'regal-green': '#89DD94',
            'regal-yellow': '#EBD094',
            'regal-violetbtn': '#A594EB',
            'regal-bluebacground': '#0A4DA2',
            'regal-yellowtext': '#FFA939',
            'regal-bluetext': '#002D67',
            'regal-blacktext': '#393939',
            'bg-regal-white': '#fff',
            'bg-regal-grey' : '#F6F8FB',
          },
        },
      },
      plugins: [],
    }



